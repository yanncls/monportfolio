import "./Box.scss";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function BoxWho() {
  const animate = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animate.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./bubble-gum-support.json"),
    });
  }, []);
  return (
    <div className="box who" id="who">
      <div className="title">
        <h1>
          Yann votre
          <br />
          <font color="#98a8f8">développeur web</font>
        </h1>
      </div>
      <div className="content">
        <div className="content_text">
          <h2>
            Une courte introduction pour me{" "}
            <font color="#ee90e0">présenter</font>
          </h2>
          <p>
            Je suis un développeur web de 30 ans issu d'une <b>reconversion</b>{" "}
            qui cherche à se spécialiser sur <b>le front-end</b>, en recherche
            d'une <b>alternance</b> pour apporter mon expertise et développer
            mes compétences dans le domaine.
          </p>
        </div>
        <div className="animate" ref={animate}>
          {/* <div className="content_img-s">
            <div className="photo-s">
              <img src="/images/handshake.jpeg" alt="handshake" />
            </div>
            <div className="photo-s">
              <img src="/images/idee.jpeg" alt="ampoule" />
            </div>
          </div>
          <div className="content_img-l">
            <div className="photo-l">
              <img src="images/comp.jpeg" alt="compétences" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
