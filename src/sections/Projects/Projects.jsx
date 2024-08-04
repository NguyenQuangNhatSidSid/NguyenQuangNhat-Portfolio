
import styles from "./ProjectStyle.module.css"
import BirdFarmMeal from "../../assets/birdfarmmeal.jpg"
import Forkify from "../../assets/recipesApp.jpg"
import FootPlayer from "../../assets/footballplayer.jpg"
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">
    Projects
    </h1>
    <div className={styles.projectsContainer}>
        <ProjectCard src={BirdFarmMeal} h3="Bird Farm Meal" p="Feeding Bird App" link="https://github.com/NguyenQuangNhatSidSid/BirdFarmMeal" />
        <ProjectCard src={Forkify} h3="Food Recipes" p="Make Recipes For Food App" link="https://github.com/NguyenQuangNhatSidSid/forkify-Nhat"/>
        <ProjectCard src={FootPlayer} h3="Football Player" p="Managerment FootBall Player App" link="https://github.com/NguyenQuangNhatSidSid/localFootBallPlayer-Backend"/>
    </div>
  </section>
);
}

export default Projects;
