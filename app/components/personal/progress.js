"use client";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(90);
  return (
    <div className="flex flex-col gap-2 h-[40px] ">
      <p>Progress {progress}%</p>
      <Progress value={progress} />
    </div>
  );
}
export default ProgressBar;
