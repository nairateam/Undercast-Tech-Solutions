import './HeroServices.css';
import { motion } from 'framer-motion';
import webdev from '../Extras/images/Frame1.svg';
import uiux from '../Extras/images/Frame2.svg';
import seo from '../Extras/images/Frame3.svg';
import graphic from '../Extras/images/Frame4.svg';
import mobileapp from '../Extras/images/Frame5.svg';

function HeroServices() {
    return (
        <motion.div className="HeroServices"
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .10, duration: 1.5 }} 
        >
            <img src={webdev} alt='Web Development' />
            <img src={uiux} alt='Web Development' />
            <img src={seo} alt='Web Development' />
            <img src={graphic} alt='Web Development' />
            <img src={mobileapp} alt='Web Development' />
        </motion.div>
    )
};

export default HeroServices;