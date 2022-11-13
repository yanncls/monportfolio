import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function BoxSoft() {
  const subject = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: subject.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./glasses-boy.json"),
    });
  }, []);

  const sport = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: sport.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./running-boy.json"),
    });
  }, []);
  return (
    <div className="box-share skills" id="skills">
      <div className="soft">
        <div className="soft-text">
          <h3>
            <font color="#98a8f8">Soft</font> Skills
          </h3>
          <li>Fort esprit d'équipe</li>
          <li>Goût pour le challenge</li>
          <li>Orienté solution</li>
          <li>Ecoute active</li>
          <li>Satisfaction client</li>
          <li>Autonome</li>
        </div>
        <div className="subject" ref={subject}></div>
      </div>
      <div className="mad">
        <div className="sport" ref={sport}></div>
        <div className="mad-text">
          <h3>
            <font color="#98a8f8">Mad</font> Skills
          </h3>
          <li>Body Building (rigueur et patience)</li>
          <li>Basket-Ball (meneur, tactique et jeu d'équipe) </li>
          <li>Course à pied (dépassement de soi et accomplissement) </li>
        </div>
      </div>
    </div>
  );
}
