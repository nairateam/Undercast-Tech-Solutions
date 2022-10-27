import './ServiceBox.css';
import figma from '../images/figma.svg';
import webs from '../images/wdes.svg';
import seo from '../images/seo.svg';
import graph from '../images/graph.svg';
import mapp from '../images/mapp.svg';

function ServiceBox() {
    return (
        <div className='Box__container'>
            <div className='box'>
                <img src={webs} alt='Web' />
                <p className='title'>
                Web Development
                </p>
                <p>
                We build and develop market standard websites for your Businesses and Organizations to thrive, 
                delivering according to schedule.
                </p>
                <button className='box__btn btn1'>
                <a href="#contact">Get Started</a>
                </button>
            </div>
            <div className='box'>
            <img src={seo} alt='Web' />
                <p className='title'>
                    SEO
                </p>
                <p>
                We make your digital brands and websites prominent on the Internet and easily discoverable by exploring 
                individuals and potential clients.
                </p>
                <button className='box__btn btn2'>
                <a href="#contact">Get Started</a>
                </button>
            </div>
            <div className='box'>
                <img src={graph} alt='Web' />
                <p className='title'>
                    Graphic Design
                </p>
                <p>
                We offer Authentic and Unique visuals for your brands that make them stand out and create a 
                bond with the brand and the Customers. 
                </p>
                <button className='box__btn btn3'>
                <a href="#contact">Get Started</a>
                </button>
            </div>
            <div className='box'>
                <img src={figma} alt='Web' />
                <p className='title'>
                UI / UX Design
                </p>
                <p>
                We help create user centered designs and interfaces for your businesses and start ups that are 
                aligned with recent trends and standards.
                </p>
                <button className='box__btn btn4'>
                <a href="#contact">Get Started</a>
                </button>
            </div>
            <div className='box'>
                <img src={mapp} alt='Web' />
                <p className='title'>
                    Mobile App Development
                </p>
                <p>
                We also develop interfaces and experiences for your mobile application ideas 
                and concept of any niche or specialization.
                </p>
                <button className='box__btn btn5'>
                <a href="#contact">Get Started</a>
                </button>
            </div>
        </div>
    )
};

export default ServiceBox;