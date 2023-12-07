import "./App.css";
import Lottie from "lottie-react";
import path from "./assets/path.json";
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
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1" }}>
          <h1>Here's the title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quibusdam, reiciendis labore neque magni earum, corrupti, fuga
            distinctio quam similique adipisci ullam alias impedit vel autem
            nulla rerum deserunt esse.
          </p>
        </div>
        <div style={{ flex: "1" }}>
          <Lottie lottieRef={lottieRef} animationData={path} loop={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
