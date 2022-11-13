import Navbar from "../components/Navbar/Navbar";
import "../styles/Homepage.scss";
import "../pages/animation";
import "../styles/Title.scss";
import BoxTechno from "../components/Box/Box_Techno";
import BoxSoft from "../components/Box/Box_Softskill";
import BoxGraduate from "../components/Box/Box_Graduate";
import BoxWho from "../components/Box/Box_Who";
import BoxPro from "../components/Box/Box_Pro";
import FooterAlt from "../components/Footer/FooterAlt";
import BoxExit from "../components/Box/Box_Exit";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="main-block">
        <div className="main-block-values">
          <BoxWho />
          <BoxTechno />
          <BoxSoft />
          <BoxPro />
          <BoxGraduate />
          <BoxExit />
          <FooterAlt />
        </div>
      </div>
    </>
  );
}

export default Homepage;
