import TabServiceWrapper from "./TabServiceWrapper"
import {DevOpsServices} from './ourServiceNavData'
import img from "../../../assets/serviceBanner.jpg";
import IntroBanner from "../../landing/IntroBanner";
const DevOps = () => {
  return (
    <section className="about-us  lg:max-w-7xl mx-auto">
   <IntroBanner
        title="DevOps"
        img={img}
        style={"bg-gradient-to-r from-gray-900 via-gray-700 to-black  "}
        opacity="absolute w-full h-full bg-black opacity-50"
      />
    {/* <h1 className="text-5xl text-center font-bold ">DevOps</h1> */}
    <TabServiceWrapper data={DevOpsServices} />
    </section>
  )
}

export default DevOps