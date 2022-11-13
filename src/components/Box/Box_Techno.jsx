import "./Box.scss";
import HtmlLogo from "../../images/html.png";
import CssLogo from "../../images/css.png";
import ReactLogo from "../../images/react.png";
import JsLogo from "../../images/react.png";
import MongoLogo from "../../images/mongo.png";
import ScssLogo from "../../images/scss.png";
import BootLogo from "../../images/boot.png";

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
            <img src={CssLogo} alt="css" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Html</b>
            </p>
            <img src={HtmlLogo} alt="html" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>React.js</b>
            </p>
            <img src={ReactLogo} alt="react" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Javascript</b>
            </p>
            <img src={JsLogo} alt="js" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>MongoDB</b>
            </p>
            <img src={MongoLogo} alt="mongo" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Sass</b>
            </p>
            <img src={ScssLogo} alt="sass" />
          </div>
          <div className="container-tech_img">
            <p>
              <b>Bootstrap</b>
            </p>
            <img src={BootLogo} alt="bootstrap" />
          </div>
        </div>
      </div>
    </div>
  );
}
