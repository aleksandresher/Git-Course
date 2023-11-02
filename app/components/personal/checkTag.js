"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

function CheckTag() {
  return (
    <div className="flex flex-col w-[200px] gap-2">
      <label className="text-red-900">Label Cards</label>
      <div className="flex items-center gap-1">
        <Checkbox id="process" aria-labelledby="process-label" />
        <label htmlFor="process" id="process-label">
          In progress
        </label>
      </div>
      <div className="flex items-center gap-1">
        <Checkbox id="learned" aria-labelledby="learned-label" />
        <label htmlFor="learned" id="learned-label">
          Learned
        </label>
      </div>
      <div className="flex items-center gap-1">
        <Checkbox id="difficult" aria-labelledby="difficult-label" />
        <label htmlFor="difficult" id="difficult-label">
          Difficult
        </label>
      </div>
      <Button type="submit">Save</Button>
    </div>
  );
}

export default CheckTag;
