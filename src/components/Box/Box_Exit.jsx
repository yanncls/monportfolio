import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Box_Exit() {
  const spy = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: spy.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./spy.json"),
    });
  }, []);

  return (
    <div className="end">
      <div className="spy" ref={spy}></div>
      <h3>
        Curieux, motivé et passioné par les technologies web et design,
        n'hésitez pas à me contacter pour me proposer de nouvelles opportunités
        professionnelles.
      </h3>
    </div>
  );
}
