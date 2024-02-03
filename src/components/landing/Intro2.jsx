import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from "../../assets/Intro2.svg";

import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="intro pb-16 px-28 h-[90vh]">
          
      <Container className="flex  justify-evenly w-full h-full   ">
        <div className="title flex flex-col place-content-center w-4/12  h-full p-6">
          <h1 className="text-4xl  h-fit font-bold drop-shadow-md leading-normal">
            The Power of Digital Evolution
          </h1>

          <p className=" pt-10  text-md text-justify font-medium leading-loose text-gray-500 drop-shadow-sm">
            <ul className="grid gap-2">
              <li>Embrace the digital era with THN IT Solutions</li>
              <li>Where innovation meets implementation</li>
              <li>
                Our comprehensive services ensure that your business not only
                adapts to change
              </li>
              <li>
                But leads the way in the dynamic realm of digital transformation
              </li>
            </ul>
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
