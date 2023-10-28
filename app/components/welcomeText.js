import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function WelcomeText() {
  const [textIsVisible, setTextIsVisible] = useState(true);

  if (!textIsVisible) {
    return null;
  } else {
    return (
      <div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to our Language Learning Platform!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Explore new languages and expand your horizons.",
            1000,
            "Ready to begin your linguistic journey?",
            1000,
            "Select Language and Click 'Start' to embark on your adventure!",
            1000,
            () => {
              setTextIsVisible(false);
            },
          ]}
          wrapper="span"
          deletionSpeed={80}
          speed={60}
          style={{ fontSize: "2em" }}
          repeat="no"
        />
      </div>
    );
  }
}

export default WelcomeText;
