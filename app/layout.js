export const metadata = {
  title: "Ritual Puzzle",
  description: "Sliding puzzle game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
