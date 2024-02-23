
import { IntroServiceCardData } from "./ourServiceData"
import TabServices from "./TabServices"
import IntroBanner from "../landing/IntroBanner"
import img from "../../assets/serviceBanner.webp"
 const OurServices = () => {
  return (
    <section className="mx-auto md:mb-8 about-us lg:max-w-7xl">
     <IntroBanner title='Explore Our Services' img={img} style={'bg-gradient-to-r from-gray-900 via-gray-700 to-black rounded-md mt-3 md:mt-0 md:rounded-lg '} opacity='absolute w-full h-full bg-black opacity-50'/>
    <TabServices  data={IntroServiceCardData}  />
    </section>
  )
}

export default OurServices