import { useState } from "react";
import QuestionCard from "./QuestionCard";

function Game() {
  const [streak, setStreak] = useState(0);

  const handleCorrect = () => {
    setStreak(streak + 1);
  };

  return (
    <div>
      <h2>Your Streak: {streak} 🔥</h2>
      <QuestionCard onCorrect={handleCorrect} />
    </div>
  );
}

export default Game;
