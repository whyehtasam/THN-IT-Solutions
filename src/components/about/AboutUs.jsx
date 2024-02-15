import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import IntroBanner from "../landing/IntroBanner";
import IntroCards from "../introCards/IntroCards";
import { aboutCardData } from "../introCards/cardData";
import SliderCheck from "../wrappers/Slidercheck";
import AboutContainer from "./AboutContainer";
import { aboutData,WhatWeOfferData } from "./aboutData";
import Carousel from "../carousel/Carousel";
import OurTech from "./OurTech";
import GetInTouch from "../wrappers/GetInTouch";
import img from "../../assets/banner.svg";
import WhatWeOffer from "./WhatWeOffer";
const AboutUs = () => {
  return (
    <section className="relative mx-auto lg:mt-8 about-us lg:max-w-[90%]">
      {/* <SliderCheck /> */}
      <AboutContainer
        data={aboutData[0]}
        style="flex flex-col-reverse mb-4 lg:flex-row-reverse bg-white rounded-md shadow-sm m-4 border"
        contentStyle="lg:max-w-[600px] lg:m-10"
        descStyle="lg:pr-24 p-0"
        imgStyle="w-full"
      />
      {/* <Intro2 /> */}
      {/* <Intro3 /> */}
      {/* <AboutContainer data={aboutData[1]} style=' flex-row-reverse '/>  */}
      {/* <AboutContainer data={aboutData[2]} style=''/>  */}
      <WhatWeOffer
      data={aboutData[3]}
        imgData={WhatWeOfferData}
        style="flex flex-col-reverse lg:flex-row bg-white rounded-md shadow-sm lg:px-12 m-4 p-6 border"
        imgStyle="w-full"
        contentStyle="lg:ml-10 lg:w-[480px] lg:p-2"
      />
      {/* <AboutContainer data={aboutData[3]} style='flex flex-col-reverse lg:flex-row ' imgStyle='w-full' contentStyle='lg:ml-10 lg:w-[500px]'/>  */}
      <IntroBanner
        title="Why Choose THN IT Solutions?"
        img={img}
        style={"bg-gradient-to-r from-gray-900 via-gray-700 to-black  p-5 mb-4"}
      />
      <IntroCards
        data={aboutCardData}
        containerStyle="mb-6"
        cardStyle="rounded-lg lg:p-3"
      />
      {/* <IntroBanner title='Get in touch' description={para}/> */}

      <OurTech
        className=" lg:w-[calc(100%-6rem)] mx-6 p-6 mb-6"
        title="Our Tech Stack"
        para="We focus on emerging technologies for building high performing web & mobile products that can be securely deployed on the cloud."
      />

      <GetInTouch
        className="lg:w-[calc(100%-6rem)] mx-6 p-6 mb-6"
        para="Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business."
      />
    </section>
  );
};

export default AboutUs;
