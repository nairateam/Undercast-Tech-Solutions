import './Btn.css'
import { motion } from 'framer-motion';
function BtnT(props) {
    return(
        <motion.button className='BtnT'
            whileHover={{ background: 'none' }}
        >
          <a href={`${props.link}`}>{props.name} </a>
        </motion.button>
    )
};

export default BtnT;