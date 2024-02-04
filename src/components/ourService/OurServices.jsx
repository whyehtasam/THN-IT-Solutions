
import Intro2 from "../about/Intro2"
import Intro3 from "../about/Intro3"
import OurseviceIntro from "./OurserviceIntro"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { IntroServiceCardData } from "../introCards/cardData"
import OurserviceIntro from "./OurserviceIntro"

 const OurServices = () => {
  return (
    <section className="about-us mt-8">
    {/* <Intro2 /> */}
    {/* <Intro3 /> */}
    <OurserviceIntro />
    <IntroBanner title='Transform Your Business with THN IT Solutions' />
    <IntroCards data={IntroServiceCardData} containerStyle='' cardStyle=''/>
    </section>
  )
}

export default OurServices