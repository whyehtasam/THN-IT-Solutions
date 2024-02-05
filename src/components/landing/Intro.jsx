import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from '../../assets/Intro-programming-animate.svg'
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="intro pb-16 px-28 h-[90vh]">
      <Container className="flex flex-row-reverse justify-evenly w-full h-full  ">
        <div className="title grid w-5/12  h-full p-6">
          <h1 className="text-4xl   h-fit font-bold  leading-normal">
          Crafting Tomorrow's <br /> Digital Solutions Today !
          </h1>
          

          <p className="pr-10 text-sm text-justify font-medium leading-loose text-gray-500 drop-shadow-sm">
          At THN IT Solutions, we believe in the power of technology to transform businesses and streamline operations. As a premier software startup, we specialize in delivering cutting-edge solutions tailored to meet the unique needs of your enterprise.
          <br/>
          From on-demand software to Web applications, Custom Software Development, Data Analytics, and IT Consulting, we are committed to scaling businesses for success.
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
