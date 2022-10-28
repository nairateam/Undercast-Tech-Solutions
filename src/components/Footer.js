import './CSS/Footer.css';
// import logo from '../IMAGES/uc__logo.svg';
import log from '../IMAGES/uc.png';
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
                <img src={log} alt='Logo' />
                <div className='footer__top'>
                <FooterItem head='About Undercast' info="A team of web creatives ready to deliver 100% inustry standard products." />
                <FooterItem head='Our Services' info="Web development, Ui/Ux, SEO, App Development." />
                <FooterItem head='Portfolio' info="Full portfolio and projects delivered are available on request." />
                <FooterItem head='Contact Us' info="
                +234 812 153 8461
                info@undercast.tech
                " />
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