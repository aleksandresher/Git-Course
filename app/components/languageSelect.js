"use client";
import { useDispatch } from "react-redux";
import { changeLanguage } from "@/redux/features/card-slice";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  {
    value: "english",
    label: "English-German",
  },
  {
    value: "german",
    label: "German-English",
  },
];

export function LanguageCombo() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-haspopup="listbox"
          aria-owns={open ? "language-listbox" : undefined}
          role="combobox"
          aria-label="language select"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : "Select Language"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No Language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                aria-selected={value === language.value ? "true" : "false"}
                value={language.value}
                label={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  dispatch(changeLanguage(currentValue));
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
