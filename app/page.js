import StartBtn from "./components/startBtn";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <p className="text-red-500">test paragraph</p>
        <StartBtn />
        <Card />
      </div>
    </main>
  );
}
