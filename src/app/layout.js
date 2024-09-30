export const metadata = {
  title: 'Trading Website',
  description: 'A simple trading website showing bullish and bearish trends.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
