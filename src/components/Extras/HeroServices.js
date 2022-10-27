import './HeroServices.css';
import { motion } from 'framer-motion';
import webdev from '../Extras/images/Frame1.webp';
import uiux from '../Extras/images/Frame2.webp';
import seo from '../Extras/images/Frame3.webp';
import graphic from '../Extras/images/Frame4.webp';
import mobileapp from '../Extras/images/Frame5.webp';

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