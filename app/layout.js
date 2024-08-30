import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Head from './head';
import { AuthProvider } from '@/context/AuthContext';
import Logout from '@/components/Logout';

const sans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Toodl",
  description: "Toodle: Track your emotions",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="flex gap-4 p-4 sm:p-8 items-center justify-between">
      <Link>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Toodl</h1>
      </Link>
      <Logout/>
    </header>
  )

  const footer = (
    <footer className={'p-4 sm:p-8 flex justify-center ' + (fugaz.className)}>
      <Link href={'https://www.linkedin.com/in/pradyuman-5-sharma/'}>
        <p className="text-lime-500">Made by Pradyuman💚</p>
      </Link>
      </footer>
  ) 

  return (
    <html lang="en">
      <Head/>
      <AuthProvider>
      <body className={'w-full max-w-[1000px] min-h-screen mx-auto flex flex-col text-sm sm:text-base '+ sans.className}>
      {header}
      {children}
      {footer}
      </body>
      </AuthProvider>
    </html>
  );
}