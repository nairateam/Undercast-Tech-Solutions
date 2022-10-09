import './TestWrap.css';
import pop from '../Extras/images/tk1.svg';

function Testimony(props) {
    return (
    <div className='wrapT'>
        <div className='test__wrap'>
            <div className='test'>
                <img src={props.image} alt={props.alt} />
            </div>
            <div className='test'>
                <p className='user_test'>{props.user}</p>
                <p className='user_job'>{props.job}</p>
                <p className='user_message'>{props.message}</p>
            </div>
            <img src={pop} alt='pop' className='pop' />
        </div>
    </div>
    )
};

export default Testimony;