"use client";
import { useSelector } from "react-redux";
function Card() {
  const cardModal = useSelector((state) => state.card.cardIsOpen);
  const cardWords = useSelector((state) => state.card.cardList);
  const startIndex = useSelector((state) => state.card.cardStartIndex);
  const currentWord = cardWords[startIndex];

  if (!cardModal) {
    return null;
  } else {
    return (
      <div className="group h-40 w-80 [perspective:800px]">
        <section className="w-80 h-40 flex  cursor-pointer justify-center items-center text-xl position relative  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="position absolute bg-[#e1bc29] w-full h-full flex justify-center items-center rounded">
            <p>{currentWord.enWord}</p>
          </div>
          <div className="position absolute bg-[#4d9de0] w-full h-full flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded">
            <p>{currentWord.deWord}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Card;
