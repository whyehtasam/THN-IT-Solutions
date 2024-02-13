
import TabServiceWrapper from "./TabServiceWrapper"
import {DataAnalyticsServices} from './ourServiceNavData'
import img from "../../../assets/serviceBanner.jpg";
import IntroBanner from "../../landing/IntroBanner";
const DataAnalytics = () => {
  return (
    <section className="about-us  lg:max-w-7xl mx-auto">
   <IntroBanner
        title="Analytics & Business Intelligence "
        img={img}
        style={"bg-gradient-to-r from-gray-900 via-gray-700 to-black  "}
        opacity="absolute w-full h-full bg-black opacity-50"
      />
    {/* <h1 className="text-5xl text-center font-bold ">Analytics & Business Intelligence </h1> */}
    <TabServiceWrapper data={DataAnalyticsServices} />
    </section>
  )
}

export default DataAnalytics