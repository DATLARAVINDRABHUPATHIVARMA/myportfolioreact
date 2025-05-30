import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Skill Icons/arya1.png";
import heroImg1 from "../../assets/Skill Icons/arya.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import Resume from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const imgIcon = theme === "light" ? heroImg : heroImg1;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          id = "ya" className={styles.Hero}
          src={imgIcon}
          alt="profile picture of DATLA RAVINDRA BHUPATHI VARMA"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 id='h1'>DATLA RAVINDRA BHUPATHI VARMA</h1>
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
        <p>
          Passionate for developing modern frontend web app technologies for
          commercial business purposes.
        </p>
        <div className={styles.btns}>
        <a href='#contact' alt=''>
          <button className={styles.hirebutton}>Hire Me</button>
        </a>
        <a href={Resume} download>
          <button className={styles.resumebutton}>Resume</button>
        </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
