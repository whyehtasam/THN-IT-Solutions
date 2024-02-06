import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from "../../assets/intro2.svg";

import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="intro pb-16   h-[90vh]">
          
      <Container className="flex  justify-evenly w-full h-full   ">
        <div className="title flex flex-col place-content-center w-5/12  h-full p-6">
          <h1 className="text-3xl  h-fit font-bold drop-shadow leading-normal">
            The Power of Digital Evolution
          </h1>
          <p className=" pt-10  text-sm text-justify font-medium leading-loose text-gray-500 drop-shadow-sm">
          At THN IT Solutions, we blend innovation, expertise, and dedication to empower businesses with cutting-edge software solutions. With a commitment to excellence, we stand as a beacon of technological prowess, providing bespoke services that propel your success in the digital realm. As a leading software company, we are dedicated to providing innovative solutions that empower businesses and individuals to thrive in the digital era.
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

export default Intro;
