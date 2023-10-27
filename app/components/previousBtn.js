"use client";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { decreaseIndex } from "@/redux/features/card-slice";

function PreviousBtn() {
  const dispatch = useDispatch();
  const cardModal = useSelector((state) => state.card.cardIsOpen);
  const startIndex = useSelector((state) => state.card.cardStartIndex);

  if (!cardModal) {
    return null;
  } else if (cardModal && startIndex > 0) {
    return (
      <div>
        <Button
          className="bg-[#e15554] hover:bg-[#e15554] bg-opacity-80 hover:bg-opacity-120"
          onClick={() => dispatch(decreaseIndex())}
        >
          Previous
        </Button>
      </div>
    );
  }
}

export default PreviousBtn;
