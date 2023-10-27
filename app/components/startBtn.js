"use client";
import { Button } from "@/components/ui/button";
import { openCardModal } from "../../redux/features/card-slice";
import { useDispatch } from "react-redux";

function StartBtn() {
  const dispatch = useDispatch();
  return (
    <div className="p-5 bg-background">
      <Button
        className="text-black-600 bg-[#3bb273] hover:bg-[#3bb273]"
        onClick={() => dispatch(openCardModal())}
      >
        Start
      </Button>
    </div>
  );
}
export default StartBtn;
