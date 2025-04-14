import { useEffect, useState } from "react";

function QuestionCard({ onCorrect }) {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showNext, setShowNext] = useState(false);

  const fetchQuestion = () => {
    setQuestion(null); 
    setSelected(null);
    setFeedback("");
    setShowNext(false);

    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => {
        const q = data.results[0];
        const answers = [...q.incorrect_answers, q.correct_answer];
        const shuffled = answers.sort(() => Math.random() - 0.5);
        setQuestion({ ...q, answers: shuffled });
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const checkAnswer = () => {
    if (selected === question.correct_answer) {
      setFeedback("✅ Correct! Watering your plant...");
      onCorrect(); 
    } else {
      setFeedback("❌ Nope! Better luck next time.");
    }
    setShowNext(true);
  };

  if (!question) return <p>Loading question...</p>;

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
      {question.answers.map((ans, idx) => (
        <button
          key={idx}
          onClick={() => setSelected(ans)}
          disabled={showNext}
          style={{
            backgroundColor: selected === ans ? "#d0f0c0" : "white",
            margin: "0.25rem",
          }}
        >
          {ans}
        </button>
      ))}

      <br />
      {!showNext && (
        <button onClick={checkAnswer} disabled={!selected}>
          Submit
        </button>
      )}
      {feedback && <p>{feedback}</p>}

      {showNext && <button onClick={fetchQuestion}>Next Question 🔁</button>}
    </div>
  );
}

export default QuestionCard;
