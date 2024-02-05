import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { aboutCardData } from "../introCards/cardData"
import SliderCheck from "../wrappers/Slidercheck"
import AboutContainer from "./AboutContainer"
import { aboutData } from "./aboutData"

 const AboutUs = () => {
  console.log(aboutData[0])
  return (
    <section className="about-us  lg:max-w-7xl mx-auto">
      {/* <SliderCheck /> */}
    <Intro2 />
    {/* <Intro3 /> */}
    <IntroBanner title='Why Choose THN IT Solutions?' />
    <IntroCards data={aboutCardData} containerStyle='' cardStyle=''/>
    <AboutContainer data={aboutData[0]} style=''/> 
    <AboutContainer data={aboutData[1]} style=' flex-row-reverse '/> 
    <AboutContainer data={aboutData[2]} style=''/> 
    <AboutContainer data={aboutData[3]} style=' flex-row-reverse '/> 
    
    <div className="p-20 mb-16 flex flex-col w-[500px] justify-center items-center mx-auto rounded-lg bg-white drop-shadow-lg mt-10">
      <h1 className="text-4xl text-center font-bold">Get in touch</h1>
      <p className="pt-10  text-sm text-justify font-medium leading-loose text-gray-500 ">
      Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business.
      </p>
    </div>
    </section>
  )
}

export default AboutUs