import styles from "./ProjectsStyles.module.css";
import weather from '../../assets/weather.png'
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://weathercalculatorapprox.vercel.app/"
          h3="Approx Weather"
          p="Weather App"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/html-css-js-portfolio-tutorial-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/react-js-personal-portfolio"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/snake-game-js"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/react-portfolio-v2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
