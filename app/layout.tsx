import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puneeth Jain | Portfolio",
  description: "Student Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"><head>
      </head>
      <body className="bg-white text-gray-900 antialiased">
       {children}
      </body>
    </html>
  );
}
