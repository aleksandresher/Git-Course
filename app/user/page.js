"use client";
import CardTypeSelect from "../components/personal/cardTypeSelect";
import { Button } from "@/components/ui/button";
import CheckTag from "../components/personal/checkTag";
import { LanguageCombo } from "../components/languageSelect";
import SpellCheck from "../components/personal/writing";
function PersonalPage() {
  return (
    <div className="h-screen w-full bg-[#f0f0ed]  flex flex-col items-center pl-8 pr-8 pt-6">
      <div className="w-full flex place-content-between">
        <section>
          <p>User Name: Motivated student</p>
        </section>
        <Button>Log out</Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-6">
          <div>
            <CardTypeSelect />
            <SpellCheck />
          </div>

          <div className=" flex flex-col gap-9 pt-[90px] ">
            <LanguageCombo />
            <CheckTag />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalPage;
