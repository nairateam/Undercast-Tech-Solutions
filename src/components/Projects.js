import './CSS/Projects.css';
import Project from './Extras/Project';
import BtnT from './buttons/BtnT';

function Projects() {
    return (
        <section className='projects'>
            <h2>
            Our Recent Projects
            </h2>
            <p>
            A snippet of works we have done and delivered to our Clients at Undercast Technologies. 
            </p>
            <Project />
            <BtnT name='See More -' />
        </section>
    )
};

export default Projects;