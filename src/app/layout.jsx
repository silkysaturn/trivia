// src/app/layout.jsx
export const metadata = {
    title: 'Trivia App',
    description: 'Test your knowledge and grow your plant!',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  