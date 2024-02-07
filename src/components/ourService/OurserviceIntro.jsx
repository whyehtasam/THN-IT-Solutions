import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from "../../assets/ourService.svg";

import { Link } from "react-router-dom";

const OurserviceIntro = () => {
  return (
    <section className="about-container mb-16 min-w-96 lg:max-w-6xl flex-row-reverse lg:flex  items-stretch mx-auto justify-evenly ">
      <div className="img flex justify-center items-center   flex-1 ">
        <img src={svg} alt="svg" className="h-[22rem] drop-shadow-md" />
      </div>
      <div className="info flex flex-1  flex-col   md: px-16 w-[500px]">
        <h1 className="text-3xl  font-bold drop-shadow leading-normal mt-10">
        Revolutionize Your Landscape with THN IT Solutions
        </h1>
        <p className=" pt-10  text-sm text-justify font-medium leading-loose ">
        Experience the synergy of innovation as THN IT Solutions offers a comprehensive array of services. From custom software development, crafting web and mobile applications, to specialized expertise in web development, we breathe life into your unique business goals. Dive deep into your data with our advanced analytics services, unlocking insights for informed decision-making that propels growth. Elevate your technology infrastructure with our IT consulting services, optimizing efficiency and fortifying security. Ready to initiate transformative change? Connect with THN IT Solutions today.
        </p>
      </div>
    </section>
  );
};

export default OurserviceIntro;
