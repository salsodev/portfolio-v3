import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Profile from "@/components/Profile";
import RecentBlog from "@/components/RecentBlog";
import TimeTravelControl from "@/components/TimeTravelControl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Salsod",
  description: "Welcome to my portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1e293b] overflow-auto`}
      >
        <Header />
        <div className="grid sm:grid-cols-1 md:grid-cols-[300px_1fr] sm:gap-10 gap-5 h-dvh text-slate-300 sm:pt-10 pt-6 sm:px-10 px-5">
          <Profile />
          <main className="grid md:grid-cols-1 lg:grid-cols-[1fr_300px] sm:grid-10 gap-5">
            <div>
              <section className="text-slate-300 py-5 px-3 bg-[#0b1121] rounded-lg">
                {children}
              </section>
            </div>
            <RecentBlog />
          </main>
        </div>
        <TimeTravelControl />
      </body>
    </html>
  );
}
