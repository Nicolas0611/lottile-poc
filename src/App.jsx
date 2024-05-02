import "./App.css";
import Lottie from "lottie-react";
import path from "./assets/path.json";
import animationC1 from "./assets/animationC1.json";
import animationC2 from "./assets/animationC2.json";
import { useEffect, useRef, useState } from "react";

function App() {
  const lottieRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeAnimation, setActiveAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position as a percentage
      const currentPosition =
        ((window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight) *
        100;

      const roundedNumber = Math.round(currentPosition);
      // Update the state with the new scroll position
      setScrollPosition(roundedNumber);
    };
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= 100) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
    console.log(lottieRef.current.getDuration(true));
  }, [scrollPosition]);

  return (
    <div>
      <Lottie lottieRef={lottieRef} animationData={animationC1} loop={true} />
    </div>
  );
}

export default App;
