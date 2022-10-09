import './Project.css';
import Btn from '../buttons/Btn';
import solcash from './images/solcash.svg';
import GSix from './images/g6.svg';
import Ewc from './images/ewc.svg';

function Project() {
    return (
        <div className='bigP'>
        <div className='project__wrap'>
            <div className='project'>
                <p className='p_head'>
                SolanaCash (Web3)
                </p>
                <p className='p_sub'>
                A Decentralized P2P payment system whereby two individuals 
                contact eachother without a third-party.
                </p>
                <div className='project__btn'>
                    <Btn name='See Details' />
                </div>
            </div>
            <div className='project'>
                <img src={solcash} alt='Soalana Cash' />
            </div>
        </div>
        {/* Project Two(2) */}

        <div className='project__wrap'>
            <div className='project'>
                <p className='p_head'>
                GoldenSix (Hotel Reservations)
                </p>
                <p className='p_sub'>
                A 4-star luxury hotel for entertainment, relaxation and recreation, 
                we enjoyed working on this project!
                </p>
                <div className='project__btn'>
                    <Btn name='See Details' />
                </div>
            </div>
            <div className='project'>
                <img src={GSix} alt='GoldenSix' />
            </div>
        </div>

        {/* Project Three (3) */}

        <div className='project__wrap'>
            <div className='project'>
                <p className='p_head'>
                EWC (Travel Agency)
                </p>
                <p className='p_sub'>
                A great platform for you to plan and prepare for your trips overseas, 
                book tickets and get information.
                </p>
                <div className='project__btn'>
                    <Btn name='See Details' />
                </div>
            </div>
            <div className='project'>
                <img src={Ewc} alt='EWC' />
            </div>
        </div>

        </div>
    )
};

export default Project;