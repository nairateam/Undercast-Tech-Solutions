import './Btn.css'
import { motion } from 'framer-motion';
function BtnT(props) {
    return(
        <motion.button className='BtnT'
            whileHover={{ background: 'none' }}
        >
            {props.name}
        </motion.button>
    )
};

export default BtnT;