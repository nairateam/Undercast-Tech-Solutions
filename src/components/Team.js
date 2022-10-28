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
                    Undercast Tech Solutions is the home of Technology and Information solutions, we started the journey in 2018 and since then we have been delivering top notch services to our various customers and collaborators. We are happy to have you on our page and hope we get to work and collaborate together. We develop websites, optimize them for search engines, 
                    design graphics, build applications and related online services...
                    </p>
                    <span>
                        <h4>
                        Lead Creative
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