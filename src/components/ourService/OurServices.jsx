
import Intro2 from "../about/Intro2"
import Intro3 from "../about/Intro3"
import OurseviceIntro from "./OurserviceIntro"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { IntroServiceCardData } from "../introCards/cardData"
import OurserviceIntro from "./OurserviceIntro"
import TabServices from "./TabServices"

 const OurServices = () => {
  return (
    <section className="about-us mt-16 lg:max-w-7xl mx-auto">
    {/* <Intro2 /> */}
    {/* <Intro3 /> */}
    {/* <OurserviceIntro /> */}
    {/* <IntroBanner title='Transform Your Business with Us' /> */}
    {/* <IntroCards data={IntroServiceCardData} containerStyle='' cardStyle=''/> */}
    <h1 className="text-5xl text-center font-bold mt-16">Explore our services</h1>
    <TabServices  data={IntroServiceCardData}  />
    </section>
  )
}

export default OurServices