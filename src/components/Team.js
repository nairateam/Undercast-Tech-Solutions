import './CSS/Team.css';
import ceo from './Extras/images/ceo.webp';

function Team() {
    return (
        <section className='teams'>
            <span>
                <p>
                We are extremely happy to have you here, welcome to Undercast Technologies. 
                </p>
                <p className='storyP'>Word From UnderCast Tech</p>
            </span>
            <div className='team__wrap'>
                <div className='team'>
                    <div className='image__wrap'>
                        <img src={ceo} alt='CEO' />
                    </div>
                </div>

                <div className='team'>
                    <p className='team_title'>
                    “We Are Here To Satisfy You...”
                    </p>
                    <p className='team_sub'>
                    Undercast Tech Solutions is the home of Technology and Information solutions, we were founded 2015 and since then we have been delivering top notch services to our various customers and collaborators worldwide. We are happy to have you on our landing page and hope you find what you are looking for. We develop websites, search engine optimize them, 
                    design graphics, promote music and advertise your digital products...
                    </p>
                    <span>
                        <h4>
                        Founder & CEO
                        </h4>
                        <p>
                        Undercast Technology Solutions<br/>
                        Oluwafemi O. Onabule.
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
};

export default Team;