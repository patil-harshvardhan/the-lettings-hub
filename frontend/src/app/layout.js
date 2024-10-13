import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { FaHome, FaStar, FaHeart } from "react-icons/fa";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "The Lettings Hub",
  description: "Introduction by Harshvardhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
            {children}
          {/* </main> */}
          {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/"
            >
              <FaHome/>
              Home
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/achievements"
            >
              <FaStar />
              My Achievements
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/likes"
            >
              <FaHeart />
              What I like
            </a>
          </footer>
        </div> */}
      </body>
    </html>
  );
}
