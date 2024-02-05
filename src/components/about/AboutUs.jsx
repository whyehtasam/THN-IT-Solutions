import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { aboutCardData } from "../introCards/cardData"
import SliderCheck from "../wrappers/Slidercheck"

 const AboutUs = () => {
  return (
    <section className="about-us border lg:max-w-7xl mx-auto">
      {/* <SliderCheck /> */}
    <Intro2 />
    {/* <Intro3 /> */}
    <IntroBanner title='Why Choose THN IT Solutions?' />
    <IntroCards data={aboutCardData} containerStyle='' cardStyle=''/>
    </section>
  )
}

export default AboutUs