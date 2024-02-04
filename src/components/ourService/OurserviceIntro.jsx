import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from "../../assets/ourService.svg";

import { Link } from "react-router-dom";

const OurserviceIntro = () => {
  return (
    <section className="intro pb-16 px-28 h-[90vh]">
          
      <Container className="flex  justify-evenly w-full h-full   ">
        <div className="title flex flex-col place-content-center w-5/12  h-full p-6">
          <h1 className="text-3xl  h-fit font-bold drop-shadow leading-normal">
          Revolutionize Your Landscape with THN IT Solutions
          </h1>
          <p className=" pt-10  text-base text-justify font-medium leading-loose text-gray-500 drop-shadow-sm">
          Experience the synergy of innovation as THN IT Solutions offers a comprehensive array of services. From custom software development, crafting web and mobile applications, to specialized expertise in web development, we breathe life into your unique business goals. Dive deep into your data with our advanced analytics services, unlocking insights for informed decision-making that propels growth. Elevate your technology infrastructure with our IT consulting services, optimizing efficiency and fortifying security. Ready to initiate transformative change? Connect with THN IT Solutions today. 
          </p>
        </div>
        <div className="img w-5/12 p-6">
          <img
            src={svg}
            alt=""
            className="h-full  drop-shadow-lg duration-1000"
          />
        </div>
      </Container>
    </section>
  );
};

export default OurserviceIntro;
