import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { aboutCardData } from "../introCards/cardData"

 const AboutUs = () => {
  return (
    <section className="about-us mt-8">
    <Intro2 />
    {/* <Intro3 /> */}
    <IntroBanner title='Why Choose THN IT Solutions?' />
    <IntroCards data={aboutCardData} containerStyle='' cardStyle=''/>
    </section>
  )
}

export default AboutUs