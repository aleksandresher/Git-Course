import ProgressBar from "../components/personal/progress";
import CardTypeSelect from "../components/personal/cardTypeSelect";
import { Button } from "@/components/ui/button";
import CheckTag from "../components/personal/checkTag";
function PersonalPage() {
  return (
    <div className="h-screen w-full  bg-[#f0f0ed]">
      <div className="w-full flex items-center justify-between pl-8 pr-8 pt-6">
        <section>
          <p>User Name: Motivated student</p>
        </section>
        <Button>Log out</Button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 w-[600px]">
          <CardTypeSelect />
          <CheckTag />
        </div>
      </div>
    </div>
  );
}
export default PersonalPage;
