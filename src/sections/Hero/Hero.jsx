import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Hero}
          src={heroImg}
          alt="profile picture of DATLA RAVINDRA BHUPATHI VARMA"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>DATLA RAVINDRA BHUPATHI VARMA</h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://www.github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
