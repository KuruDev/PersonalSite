import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div class="context">
            <h2>No projects to display.</h2><br></br>
            <Link className="main-btn" to="/"><i class="fas fa-arrow-left"></i> Home</Link>
        </div>
    );
};

export default Projects;