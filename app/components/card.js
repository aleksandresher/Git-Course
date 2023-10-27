"use client";
import { useSelector } from "react-redux";
function Card() {
  const cardModal = useSelector((state) => state.card.cardIsOpen);

  if (!cardModal) {
    return null;
  } else {
    return (
      <section>
        <p>some test text</p>
      </section>
    );
  }
}

export default Card;
