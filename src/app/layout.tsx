import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import iconGithub from "../../public/github-mark-white.svg";
import iconLinkedIn from "../../public/icons8-linkedin.svg";
import iconNextJs from "../../public/nextjs-icon-svgrepo-com.svg";
import iconTailwindCSS from "../../public/tailwindcss-icon-svgrepo-com.svg";
import iconHackerRank from "../../public/hackerrank_logo-21e2867566.svg";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ofie",
  description: "Ofie's vercel hosted website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <main className="flex flex-col items-center bg-gray-700 text-white/75 w-[100%]">
          <div className="flex flex-col justify-between items-center min-h-screen xl:w-[60%] lg:w-[70%] md:w-[80%] w-[100%]">
            <div className="grid grid-cols-1 w-[100%] py-4 px-6 text-xl tracking-widest">
              <div className="flex justify-between items-center ">
                <Link
                  href="/"
                  className="pt-1 px-1 rounded-sm transition-colors duration-300 transform hover:bg-gray-500"
                >
                  HOME
                </Link>
                <div className="flex gap-4 items-center">
                  <Link
                    href="/experiences"
                    className="pt-1 px-1 rounded-sm transition-colors duration-300 transform hover:bg-gray-500 hidden xs:block"
                  >
                    EXPERIENCES
                  </Link>
                  <Link
                    href="/projects"
                    className="pt-1 px-1 rounded-sm transition-colors duration-300 transform hover:bg-gray-500 hidden xs:block"
                  >
                    PROJECTS
                  </Link>
                  {/* <Link href="/about" className="pt-1 px-1 rounded-sm transition-colors duration-300 transform hover:bg-gray-500">
                  ABOUT
                </Link> */}

                  <a href="https://www.hackerrank.com/profile/ofieisranta">
                    <Image src={iconHackerRank} alt="github icon" width={30} />
                  </a>
                  <a href="https://github.com/fieTarigan">
                    <Image src={iconGithub} alt="github icon" width={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-ofie-640331175/">
                    <Image src={iconLinkedIn} alt="linkedin icon" width={35} />
                  </a>
                </div>
              </div>

              <div className="flex justify-around items-center xs:hidden pt-2">
                <Link
                  href="/experiences"
                  className="pt-1 px-1 rounded-sm transition-colors duration-300 transform hover:bg-gray-500"
                >
                  EXPERIENCES
                </Link>
                <Link
                  href="/projects"
                  className="pt-1 px-1 rounded-sm transition-colors duration-300 transform hover:bg-gray-500"
                >
                  PROJECTS
                </Link>
              </div>
            </div>

            <div className="min-w-[100%]">{children}</div>

            <div className="flex items-center justify-center gap-4 py-3">
              <span className="pt-1 text-lg">Built with &hearts; using</span>
              <Image src={iconNextJs} alt="nextjs icon" width={30} />
              <Image src={iconTailwindCSS} alt="nextjs icon" width={30} />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
