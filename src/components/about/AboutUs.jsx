import Intro2 from "./Intro2"
import Intro3 from "./Intro3"
import IntroBanner from "../landing/IntroBanner"
import IntroCards from "../introCards/IntroCards"
import { aboutCardData } from "../introCards/cardData"
import SliderCheck from "../wrappers/Slidercheck"
import AboutContainer from "./AboutContainer"
import { aboutData } from "./aboutData"
import Carousel from '../carousel/Carousel'
import OurTech from "./OurTech"
import GetInTouch from "../wrappers/GetInTouch"
import img from "../../assets/banner.svg";
 const AboutUs = () => {
  

  
  return (


    <section className="relative mx-auto lg:mt-8 about-us lg:max-w-[90%]">
     
      
      {/* <SliderCheck /> */}
    <AboutContainer data={aboutData[0]} style='flex flex-col-reverse mb-4'/> 
    {/* <Intro2 /> */}
    {/* <Intro3 /> */}
    {/* <AboutContainer data={aboutData[1]} style=' flex-row-reverse '/>  */}
    {/* <AboutContainer data={aboutData[2]} style=''/>  */}
    <AboutContainer data={aboutData[3]} style='flex flex-col-reverse   lg:flex-row-reverse'/> 
    <IntroBanner title='Why Choose THN IT Solutions?' img={img} style={'bg-gradient-to-r from-gray-900 via-gray-700 to-black  p-5 mb-4'}/>
    <IntroCards data={aboutCardData} containerStyle='mb-6' cardStyle='rounded-lg lg:p-5'/> 
    {/* <IntroBanner title='Get in touch' description={para}/> */}

    <OurTech className=' lg:w-[calc(100%-6rem)] mx-6 p-6 mb-6' title='Our Tech Stack' para='We focus on emerging technologies for building high performing web & mobile products that can be securely deployed on the cloud.'/>
    
    <GetInTouch className='lg:w-[calc(100%-6rem)] mx-6 p-6 mb-6' para = 'Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business.'/>
   
    </section>
  )
}

export default AboutUs