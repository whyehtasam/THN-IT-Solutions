import TabServiceWrapper from "./TabServiceWrapper";
import { ApplicationDevelopmentServices } from "./ourServiceNavData";
import img from "../../../assets/serviceBanner.jpg";
import IntroBanner from "../../landing/IntroBanner";
const Application = () => {
  return (
    <section className="about-us  lg:max-w-7xl mx-auto">
      <IntroBanner
        title="Application Development"
        img={img}
        style={"bg-gradient-to-r from-gray-900 via-gray-700 to-black rounded-md mt-3 md:mt-0 md:rounded-lg  "}
        opacity="absolute w-full h-full bg-black opacity-50"
      />

      <TabServiceWrapper data={ApplicationDevelopmentServices} />
    </section>
  );
};

export default Application;
