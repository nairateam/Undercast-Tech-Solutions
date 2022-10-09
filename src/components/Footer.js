import './CSS/Footer.css';
import logo from '../IMAGES/uc__logo.svg';
import FooterItem from './props/FooterItem';
import english from '../IMAGES/english.svg';
import facebook from '../IMAGES/Fb.svg';
import Insta from '../IMAGES/Insta.svg';
import Twitter from '../IMAGES/Twitter.svg';
import LinkedIn from '../IMAGES/LinkIn.svg';

function Footer() {
    return (
        <div className='footer__wrap'>
            <div className="slit_foot">
                <img src={logo} alt='Logo' />
                <div className='footer__top'>
                <FooterItem head='About Undercast' info="Learn whats behind our comapany." />
                <FooterItem head='Our Services' info="What exactly we are offering to do." />
                <FooterItem head='Portfolio' info="A view of our works if you want to be convinced." />
                <FooterItem head='Contact Us' info="We always look forward to hearing from you, reach out to us today!" />
            </div>
            </div>
            <div className='footer__bottom'>
                <img src={english} alt="Language" />
                <div className='footer__links'>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Undercast Tech Solutions</p>
                </div>
                <div className='footer__links adjust_l'>
                <img src={Insta} alt="Socials" />
                <img src={Twitter} alt="Socials" />
                <img src={LinkedIn} alt="Socials" />
                <img src={facebook} alt="Socials" />
                </div>
            </div>
        </div>
    )
};

export default Footer;