import './CSS/Hero.css';
import heroPic from '../IMAGES/saly.webp';
import highT from './Extras/images/Highlight_05.svg';
import vecT from './Extras/images/Vector1.svg';
import Nav from './Nav.js';
import HeroServices from './Extras/HeroServices';
import Btn from './buttons/Btn.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Hero() {
    return (
        <section className='hero'>
            <Nav />
            <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: 2.5 }} 
            className='hero__title'>
            All Your Information and 
            Technology Solutions In One Hub
            <img src={highT} alt="Tech" className='h2extra' />
            <img src={vecT} alt="Tech" className='h2vec' />
            </motion.h2> 
            {/* <h2 className='title2'>Solutions In One Hub</h2> */}
            <motion.p className='hero__subtitle'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .5, duration: 1.5}}
            >
            At Undercast, we offer a wide range of professional 
            Tech related services that instantly thrives your business 
            and improves your online presence ...
            </motion.p>
            <HeroServices />
            <div className='hero__btn'>
                <Btn name='Contact Us' link='#contact' />
            </div>
            <div className='hero__banner'>
            <img src={heroPic} alt='Hero Banner' className='hero__banner' />
            </div>
        </section>
    )
};

export default Hero;