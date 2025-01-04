
import ProjectCard from "./projectsCard";
import mindgym from '../images/mindgym.jpeg';
import pumaClone from '../images/pumaClone.jpeg';
import weatherApp from '../images/weatherApp.jpeg'
import mealApp from '../images/mealApp.jpeg'
const Projects = () => {
    return (
        <section className="projects-section">
            <div className="projects-first-section-container">
            <div className="projects-section-text-container">
                <p className="projects-text">Projects</p>
                <h1 className="projects-description">I bring results.<br />My clients are proof</h1>
            </div>
            <div className="project-section-btn-div">
                <button className="projects-btn" id="project-btn">View all projects</button>
                <button className="projects-btn" id="project-btn-background"></button>
            </div>

            </div>

            <div className="carousel-container">
                <ProjectCard imgSrc={mindgym} title={"Developed"} company={"MindGymLab"}/>
                <ProjectCard imgSrc={pumaClone} title={"Puma clone"} company={"Puma"} />
                <ProjectCard imgSrc={weatherApp} title={"Weather app"} company={"MeInc."} />
                <ProjectCard imgSrc={mealApp} title={"Meal App"} company={"MeInc."} />
            </div>


        </section>
    )
}

export default Projects;