"use client";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { increaseIndex } from "@/redux/features/card-slice";

function NextBtn() {
  const cardModal = useSelector((state) => state.card.cardIsOpen);
  const dispatch = useDispatch();
  const startIndex = useSelector((state) => state.card.cardStartIndex);
  const cardWords = useSelector((state) => state.card.cardList);

  if (cardModal && startIndex < cardWords.length - 1) {
    return (
      <div>
        <Button
          className="bg-green-500 hover:bg-green-600 text-black-600"
          onClick={() => dispatch(increaseIndex())}
        >
          Next
        </Button>
      </div>
    );
  } else {
    return null;
  }
}

export default NextBtn;
