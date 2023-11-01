function PersonalCard() {
  return (
    <div className="group h-40 w-80 [perspective:800px]">
      <section className="w-80 h-40 flex  cursor-pointer justify-center items-center text-xl position relative  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="position absolute bg-[#e1bc29] w-full h-full flex justify-center items-center rounded">
          <p>Random text</p>
        </div>
        <div className="position absolute bg-[#4d9de0] w-full h-full flex justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden] rounded">
          <p>Random text</p>
        </div>
      </section>
    </div>
  );
}

export default PersonalCard;
