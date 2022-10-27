import './Client.css';

import client1 from './images/client1.webp';
import client2 from './images/client2.webp';
import client3 from './images/client3.webp';
import client4 from './images/client4.webp';
import client5 from './images/client5.webp';
import client6 from './images/client6.webp';

function Client() {
    

    return (
    <div className="client">
        <img src={client1} alt="Kinzbell" className='clien__logo' />
        <img src={client2} alt="Rookies" className='clien__logo' />
        <img src={client4} alt="Khash Exchange" className='clien__logo' />
        <img src={client5} alt="Jaiye Lagos" className='clien__logo' />
        <img src={client6} alt="Nairateam" className='clien__logo' />
        <img src={client3} alt="Golden Six" className='clien__logo' />
    </div>
    )
};

export default Client;