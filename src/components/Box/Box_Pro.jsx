import ButtonPro from "../Button/ButtonPro";
import Booki from "../../images/booki.png";
import Ohmyfood from "../../images/ohmyfood.png";
import Chouette from "../../images/chouette.png";
import Kanap from "../../images/kanap.png";
import Piquante from "../../images/piquante1.png";
import Groupomania from "../../images/groupomania.png";

export default function BoxPro() {
  return (
    <div className="container_pro">
      <div className="pro_title" id="carousel">
        <h2>Mes projets professionnels</h2>
      </div>
      <section>
        <div className="pro_content">
          <div className="pro_block">
            <div className="pro_block-display">
              <a href={Booki}>
                <img src={Booki} alt="booki" />
              </a>
              <div className="pro_block-txt">
                <h3>Booki</h3>
                <p>
                  Un site de réservation en ligne de logement de vacances,
                  inspiré de AirBnB
                </p>
                <p>Réalisé avec #html #css</p>
                <a href="https://yanncls.github.io/Booki/">
                  <ButtonPro />
                </a>
              </div>
            </div>
            <div className="pro_block-display">
              <div className="pro_block-txt">
                <h3>Ohmyfood</h3>
                <p>
                  Un site de commande en ligne de plat à emporter, inspiré des
                  applications de livraison de repas.
                </p>

                <p>Réalisé avec #html #css</p>
                <a href="https://github.com/yanncls/Ohmyfood">
                  <ButtonPro />
                </a>
              </div>
              <a href={Ohmyfood}>
                <img src={Ohmyfood} alt="ohmyfood" />
              </a>
            </div>
            <div className="pro_block-display">
              <a href={Chouette}>
                <img src={Chouette} alt="chouette" />
              </a>
              <div className="pro_block-txt">
                <h3>La Chouette Agence</h3>
                <p>
                  Une agence web design qui à souhaité améliorer son
                  référencement SEO
                </p>

                <p>Réalisé avec #javascript #html #css</p>
                <a href="https://yanncls.github.io/La-Chouette-Agence/">
                  <ButtonPro />
                </a>
              </div>
            </div>
            <div className="pro_block-display">
              <div className="pro_block-txt">
                <h3>Kanap</h3>
                <p>Un site e-commerce de canapé.</p>

                <p>Réalisé avec #html #css</p>
                <a href="https://github.com/yanncls/Kanap">
                  <ButtonPro />
                </a>
              </div>
              <a href={Kanap}>
                <img src={Kanap} alt="kanap" />
              </a>
            </div>
            <div className="pro_block-display">
              <a href={Piquante}>
                <img src={Piquante} alt="piquante" />
              </a>
              <div className="pro_block-txt">
                <h3>Piquante</h3>
                <p>
                  Une application web d'avis gastronomiques dont une API à
                  construire from scratch.
                </p>

                <p>Réalisé avec #javascript #nodejs #mongodb</p>
                <a href="https://github.com/yanncls/Piquante">
                  <ButtonPro />
                </a>
              </div>
            </div>
            <div className="pro_block-display">
              <div className="pro_block-txt">
                <h3>Groupomania</h3>
                <p>Un réseau social d'entreprise, inspiré de facebook.</p>
                <p>Réalisé avec #react #javascript #sass #nodejs #axios</p>
                <a href="https://github.com/yanncls/groupomania">
                  <ButtonPro />
                </a>
              </div>
              <a href={Groupomania}>
                <img src={Groupomania} alt="groupomania" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
