"use client";
import StartBtn from "./components/startBtn";
import Card from "./components/card";
import NextBtn from "./components/nextBtn";
import PreviousBtn from "./components/previousBtn";
import WelcomeText from "./components/welcomeText";
import { LanguageCombo } from "./components/languageSelect";
import AddWords from "./components/addWords";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#edede9]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="h-[30px]">
          <WelcomeText />
        </div>

        <div className="flex justify-center items-center gap-3 mt-3">
          <LanguageCombo />
          <StartBtn />
          <AddWords />
        </div>
        <Card />
        <div className="flex items-center gap-2 mt-8">
          <PreviousBtn />
          <NextBtn />
        </div>
      </div>
    </main>
  );
}
