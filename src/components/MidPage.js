import './CSS/MidPage.css';
import Clients from "./Clients";
import OurStory from './Extras/OurStory';
import Services from './Extras/Services';

function MidPage() {
    return(
        <div className="mid__page">
            <Clients />
            <OurStory />
            <Services />
        </div>
    )
};

export default MidPage;