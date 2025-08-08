import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<link
  href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
  rel="stylesheet"
></link>;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: "Profile Islam",
  description: "Profile Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
