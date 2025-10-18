import OurServices from "./OurServices.jsx";
import Navbar from "./NavBar.jsx";
import HomeBanner from "./HomeBanner.jsx";
import HowItWorks from "./HowItWorks.jsx";
import ExpertDoctors from "./ExpertDoctors.jsx";
import {ReadyCtaBox} from "./ReadyCtaBox.jsx";
import { SiteFooter } from "./Footer.jsx";


const Homepage = ()=> {
  return (
    <>
      <Navbar/>
      <HomeBanner />
      <OurServices />
      <HowItWorks />
      <ExpertDoctors/>
      <ReadyCtaBox/>
      <SiteFooter/>
    </>
  );
}

export default Homepage;


