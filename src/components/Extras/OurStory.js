import './OurStory.css';
import DeskUc from './images/deskuc.svg';
import Btn from '../buttons/Btn';

function OurStory() {
    return (
        <div className='story__wrap'>
            <div className='story'>
                <span id='about'>
                    <p>
                    A brief introduction to Undercast 
                    Technologies and what we do. 
                    </p>
                    <p className='storyP'>Our Story</p>
                </span>
                <p className='longP'>
                At Undercast Technology Solutions, our objective is to provide a platform that serves 
                as a number one stop  for your various Tech and Information problems, <br/><br/>

                We also look to take your businesses and brands to a whole new level 
                by providing a unique online prescence via websites, optimizing their discoverability and creating a friendlier enviroment for income generation.<br/><br/>

                We have a team of highly qualified professionals to cater for your requests and deliver top notch results in little to no time.
                </p>
                <div className='story__btn'>
                <Btn name='Our Services' link='#service' />
                </div>
            </div>
            <div className='story'>
                <img src={DeskUc} alt='Desk' />
            </div>
        </div>
    )
};

export default OurStory;