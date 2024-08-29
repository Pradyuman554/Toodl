import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Toodle",
  description: "Toodle: Track your emotions",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="flex gap-4 p-4 sm:p-8 items-center justify-between text-lime-600">
    <h1 className={' '+fugaz.className}>Toodle</h1>
    <div className="flex items-center justify-between">PLACEHOLDER CTA || STATS</div>
    </header>
  )

  const footer = (
    <footer className={'p-4 sm:p-8 flex justify-center ' + (fugaz.className)}>
      <p className="text-lime-500">Made with 💚</p>
      </footer>
  ) 

  return (
    <html lang="en">
      <body className={'w-full max-w-[1000px] min-h-screen mx-auto flex flex-col text-sm sm:text-base '+ sans.className}>
      {header}
      {children}
      {footer}
      </body>
    </html>
  );
}
