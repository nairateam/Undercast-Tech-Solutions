import './Btn.css';
import { motion } from 'framer-motion';

function Btn(props) {
    return(
        <motion.button className='Btn'
        whileHover={{ scale: 1.2 }}
        >
            {props.name}
        </motion.button>
    )
};

export default Btn;