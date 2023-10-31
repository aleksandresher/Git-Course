"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

function CheckTag() {
  return (
    <div className="flex flex-col w-[200px] gap-2">
      <label className="text-red-900">Label Cards</label>
      <div className="flex items-center gap-1">
        <Checkbox id="process" />
        <label htmlFor="process">In progress</label>
      </div>
      <div className="flex items-center gap-1">
        <Checkbox id="learned" />
        <label htmlFor="learned">Learned</label>
      </div>
      <div className="flex items-center gap-1">
        <Checkbox id="difficult" />
        <label htmlFor="difficult">Difficult</label>
      </div>
      <Button type="submit">Save</Button>
    </div>
  );
}

export default CheckTag;
