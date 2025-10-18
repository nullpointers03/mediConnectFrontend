import BodyHealthScore from "./BodyHealthScore"
import FeedNavbar from "./FeedNavBar";
import {SiteFooter} from "./Footer"
import SecondSection from "./SecondSection";

const Body = () => {
    return(
        <>
            <FeedNavbar/>
            <div className="bg-blue-50 width-full">
                <BodyHealthScore/>
                <SecondSection/>
            </div>
            <SiteFooter />
        </>
    )
}

export default Body;