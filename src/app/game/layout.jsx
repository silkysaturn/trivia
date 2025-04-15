export const metadata = {
    title: 'Trivia App',
    description: 'Grow your plant with trivia!',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
}