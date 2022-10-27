import './CSS/Testimonials.css';
import Testimony from './props/TestWrap';
import zee from './Extras/images/zee.webp';
import imade from './Extras/images/imade.webp';
import joe from './Extras/images/joe.webp';

function Testimonials() {
    return (
        <section className='testimonials'>
            <h2>
            Client Testimonials
            </h2>
            <p>
                {/* <img src={seo} /> */}
            A quick view of what our amazing clients have to say about our services and  their experiences. 
            </p>
            <div className='testWrapper'>
                <Testimony user='Imade Ize-iyamu' job="CEO - Rookies Consult" image={imade}
                message="“
                I cant say enough about how Femi's knowledge in this field has impacted my business positively. Thanks Oluwafemi, Rookies would never have done it without you.”" 
                />
                <Testimony user='St. Joseph Ovensehi' job="CEO - Kinzbell Groups" image={joe}
                message="“
                Underast created and has been managing the website of my company for the over 5 years. The ability to create and resolve any issues regarding my website is very commendable. They extremely good at what they do- information technology.”" 
                />
                <Testimony user='Azeez Osinsawo' job="Product Designer" image={zee}
                message="“
                I hired Olamilekan Onabule C.E.O Undercast Tech Solutions, to help develop our company's website (Trendjamz), trust me they're reliable, flexible and responsive. The job was super good and it always nice doing business 👍.”" 
                />
            </div>

        </section>
    )
};

export default Testimonials;