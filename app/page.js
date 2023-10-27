import StartBtn from "./components/startBtn";
import Card from "./components/card";
import NextBtn from "./components/nextBtn";
import PreviousBtn from "./components/previousBtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <StartBtn />
        <Card />
        <div className="flex items-center gap-2 mt-8">
          <PreviousBtn />
          <NextBtn />
        </div>
      </div>
    </main>
  );
}
