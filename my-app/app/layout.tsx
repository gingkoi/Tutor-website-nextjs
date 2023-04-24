import "./globals.css";

export const metadata = {
  title: "LearningHub",
  description: "Simple tuition website concept",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primaryBG">{children}</body>
    </html>
  );
}
