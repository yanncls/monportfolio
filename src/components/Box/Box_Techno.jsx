import "./Box.scss";

export default function BoxTechno() {
  return (
    <div className="box tech middle" id="tech">
      <div className="bandeau">
        <div className="bandeau_title">
          <h2>
            Mes <font color="#ee90e0">technos</font> actuelles
          </h2>
        </div>
        <div className="container-tech">
          <div className="container-tech_img">
            <p>
              <b>CSS</b>
            </p>
            <img src="/images/css.png" alt="css" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Html</b>
            </p>
            <img src="/images/html.png" alt="html" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>React.js</b>
            </p>
            <img src="/images/react.png" alt="react" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Javascript</b>
            </p>
            <img src="/images/js.png" alt="js" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>MongoDB</b>
            </p>
            <img src="/images/mongo.png" alt="mongo" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Sass</b>
            </p>
            <img src="/images/scss.png" alt="sass" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Bootstrap</b>
            </p>
            <img src="/images/boot.png" alt="bootstrap" />
          </div>
        </div>
      </div>
    </div>
  );
}
