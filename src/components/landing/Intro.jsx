import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from '../../assets/Intro-programming-animate.svg'
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="intro pb-16 px-28 h-[90vh]">
      <Container className="flex flex-row-reverse justify-evenly w-full h-full shadow-sm bg-white ">
        <div className="title grid w-5/12  h-full p-6">
          <h1 className="text-4xl  h-fit font-bold drop-shadow-md leading-normal">
          Crafting Tomorrow's <br /> Digital Solutions Today !
          </h1>
          

          <p className="pr-10 text-md text-justify font-medium leading-loose text-gray-500 drop-shadow-sm">
          In the ever-evolving landscape of technology, THN IT Solutions stands as a beacon, offering unparalleled expertise in crafting tailored digital solutions. <br/><br/>
          From on-demand software to Web applications, Content management systems (CMS), App development, and cutting-edge cloud services, we are committed to scaling businesses for success.
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
