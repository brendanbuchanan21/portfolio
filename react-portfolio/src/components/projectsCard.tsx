

interface ProjectCardProps {
    imgSrc: string;
    title: string;
    company: string;
}



const ProjectCard:  React.FC<ProjectCardProps>  = (props) => {
    return (
    <div className="project-card">
        <img src={props.imgSrc} alt="{props.title}" className="mindGymImg"/>
        <div className="project-description-div">
        <p className="colorful-card-text">{props.title}</p>
        <p className="company-text">{props.company}</p>
        <p className="view-project-text">View Project<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
        className="arrow-icon"
        style={{ marginLeft: '8px', verticalAlign: 'middle' }}
    >
        <path d="M9 18l6-6-6-6" />
    </svg></p>
        </div>
    </div>
    );
}

export default ProjectCard;