export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <a href="https://www.linkedin.com/in/yann-julien-cleonis-886749a2/">
            <img src={require("../../images/link.svg").default} alt="link" />
          </a>
        </div>
        <div>
          <a href="https://github.com/yanncls">
            <img
              src={require("../../images/git.svg").default}
              alt="git"
              className="git"
            />
          </a>
        </div>
        <div>
          <a href="mailto:cleonisyann@icloud.com">
            <img src={require("../../images/gmail.svg").default} alt="mail" />
          </a>
        </div>
      </div>
    </footer>
  );
}
