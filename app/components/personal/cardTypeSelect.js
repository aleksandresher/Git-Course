"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function CardTypeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select type of cards" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="learned">Learned</SelectItem>
          <SelectItem value="process">In Process</SelectItem>
          <SelectItem value="difficult">Difficult</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default CardTypeSelect;
