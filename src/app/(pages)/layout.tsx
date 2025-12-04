import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Clone tabnews",
  description: "Created to learn the course curso.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
