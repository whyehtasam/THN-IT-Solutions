import Container from "../wrappers/Container";
import Button from "../button/Button";
// import svg from '../../assets/coding-workshop-animate.svg'
import svg from '../../assets/hero.svg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero pt-8 pb-16 lg:px-28 px-4 h-[90vh]">
      <Container className="flex  w-full h-full  drop-shadow-sm ">
        <div className="title grid gap-3 w-8/12 h-full p-6">
          <h1 className="lg:text-7xl   -ml-2 w-max font-bold drop-shadow-sm">THN IT Solutions</h1>
          <h1 className="slogan text-2xl font-bold leading-normal text-gray-700 ">
            Your Vison, 
            Our Solution,
             Infinite Possibilities
          </h1>
          <p className="pr-40 text-md text-justify font-medium leading-loose text-gray-500 drop-shadow-sm">
          At THN IT Solutions, we believe in the power of technology to transform businesses and streamline operations. As a premier software startup, we specialize in delivering cutting-edge solutions tailored to meet the unique needs of your enterprise.
          
          </p>
          
          {/* <p className=" text-2xl  text-slate-300 font-semibold drop-shadow-sm">
            Do you have an Idea, Let's Build it Together !
          </p> */}
          {/* <div className="Buttons mt-4" >
            <Link to='/contact'><Button className="btn  mr-10 btn-neutral text-white  px-6 hover:drop-shadow-md hover:bg-white hover:text-neutral-900 hover:border-black transition-all duration-300">Contact Us</Button></Link>
            <Button className="btn  bg-slate-100 border-black px-6 hover:drop-shadow-sm">Explore Our Experties</Button>
          </div> */}
        </div>
        <div className="img ">
            <img src={svg} alt=""  className="h-full  drop-shadow-lg duration-1000"/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
