import './Services.css';
import ServiceBox from './ui/ServiceBox';

function Services() {
    return (
        <div className='services'>
            {/* <a id="service"></a> */}
            <h2 id='service'>The Wide Range Of Our Services</h2>
            <p>A  walk through on what we offer here at Undercast Tech Solutions. </p>
            <ServiceBox />
        </div>
    )
};

export default Services;