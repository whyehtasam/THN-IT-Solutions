import { IntroServiceCardData } from "../ourServiceData"


import TabServiceWrapper from "./TabServiceWrapper"
import {CloudServices} from './ourServiceNavData'
import img from "../../../assets/serviceBanner.jpg";
import IntroBanner from "../../landing/IntroBanner";
const Application = () => {
  return (
    <section className="about-us  lg:max-w-7xl mx-auto">
   <IntroBanner
        title="Cloud Service"
        img={img}
        style={"bg-gradient-to-r from-gray-900 via-gray-700 to-black rounded-md mt-3 md:mt-0 md:rounded-lg   "}
        opacity="absolute w-full h-full bg-black opacity-50"
      />
    {/* <h1 className="text-5xl text-center font-bold ">Cloud Service</h1> */}
    {/* <TabServices  data={IntroServiceCardData}  /> */}
    <TabServiceWrapper data={CloudServices} />
    </section>
  )
}

export default Application