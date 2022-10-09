import './Client.css';

import client1 from './images/client1.svg';
import client2 from './images/client2.svg';
import client3 from './images/client3.svg';
import client4 from './images/client4.svg';
import client5 from './images/client5.svg';
import client6 from './images/client6.svg';

function Client() {
    return (
        <div className="client">
        <img src={client1} alt="Kinzbell" className='clien__logo' />
        <img src={client2} alt="Kinzbell" className='clien__logo' />
        <img src={client3} alt="Kinzbell" className='clien__logo' />
        <img src={client4} alt="Kinzbell" className='clien__logo' />
        <img src={client5} alt="Kinzbell" className='clien__logo' />
        <img src={client6} alt="Kinzbell" className='clien__logo' />
    </div>
    )
};

export default Client;