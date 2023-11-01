import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

function SpellCheck() {
  const [isChecked, setChecked] = useState(false);
  return (
    <div className="flex  w-full gap-1.5 items-center  justify-between pb-5 h-[100px]">
      <div>
        {isChecked && (
          <Input
            id="word"
            className="bg-[#63ccca]"
            type="text"
            placeholder="Enter a word "
          />
        )}
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="spell" checked={isChecked} onCheckedChange={setChecked} />
        <label htmlFor="spell">Spelling Mode</label>
      </div>
    </div>
  );
}
export default SpellCheck;
