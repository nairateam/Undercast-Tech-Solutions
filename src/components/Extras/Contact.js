import './Contact.css';
import ContactPic from './images/contact.svg';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section className='contact__wrap'>
            <div className='contact'>
                <img src={ContactPic} alt="Contact" />
            </div>
            <div className='contact'>
                <ContactForm />
            </div>
        </section>
    )
};

export default Contact;