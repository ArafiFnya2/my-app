import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-barlow',
});

const belleFair = Bellefair({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bellefair',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-barlow-condensed',
});

export const metadata = {
  title: "Space Travel",
  description: "want to travel to space? no problem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${belleFair.variable} ${barlowCondensed.variable}  antialiased`}
      >
        <Navbar className="barlow" />
        {children}
      </body>
    </html>
  );
}
