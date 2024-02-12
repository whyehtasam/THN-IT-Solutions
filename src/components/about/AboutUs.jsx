import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { aboutCardData } from "../introCards/cardData"
import SliderCheck from "../wrappers/Slidercheck"
import AboutContainer from "./AboutContainer"
import { aboutData } from "./aboutData"
import Carousel from '../carousel/Carousel'
import GetInTouch from "../wrappers/GetInTouch"
import img from "../../assets/banner.svg";
 const AboutUs = () => {
  const para = 'Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business.'

  
  return (


    <section className="relative mx-auto mt-16 about-us lg:max-w-[90%]">
     
      
      {/* <SliderCheck /> */}
    <AboutContainer data={aboutData[0]} style=''/> 
    {/* <Intro2 /> */}
    {/* <Intro3 /> */}
    {/* <AboutContainer data={aboutData[1]} style=' flex-row-reverse '/>  */}
    {/* <AboutContainer data={aboutData[2]} style=''/>  */}
    {/* <AboutContainer data={aboutData[3]} style=' '/>  */}
    <IntroBanner title='Why Choose THN IT Solutions?' img={img} style={'bg-gradient-to-r from-gray-900 via-gray-700 to-black  '}/>
    <IntroCards data={aboutCardData} containerStyle='' cardStyle=''/> 
    {/* <IntroBanner title='Get in touch' description={para}/> */}
    
    <GetInTouch className=' w-[calc(100%-8rem)]' para = 'Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business.'/>
   
    </section>
  )
}

export default AboutUs