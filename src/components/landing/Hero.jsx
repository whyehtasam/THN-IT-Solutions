import Container from "../wrappers/Container";
import Button from "../button/Button";
// import svg from '../../assets/coding-workshop-animate.svg'
import svg from '../../assets/hero.svg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero py-16 px-28 h-[90vh]">
      <Container className="flex  w-full h-full shadow-sm bg-white ">
        <div className="title grid gap-3 h-full p-6">
          <h1 className="text-6xl w-max font-bold drop-shadow-md">THN IT Solutions Pvt Ltd</h1>
          <h1 className="text-5xl font-bold leading-normal text-gray-600 drop-shadow">
            Your Vison, <br/>
            Our Solution,
            <br /> Infinite Possibilities !
          </h1>
          
          <p className="text-3xl  text-slate-300 font-semibold drop-shadow-sm">
            Do you have an Idea, Let's Build it Together !
          </p>
          <div className="Buttons mt-4" >
            <Link to='/contact'><Button className="btn mr-10 btn-neutral text-white  px-6 hover:drop-shadow-md hover:bg-white hover:text-neutral-900 hover:border-black transition-all duration-300">Contact Us</Button></Link>
            <Button className="btn bg-slate-100 border-black px-6 hover:drop-shadow-sm">Explore Our Experties</Button>
          </div>
        </div>
        <div className="img p-6">
            <img src={svg} alt=""  className="h-full scale-[1.1] drop-shadow-lg duration-1000"/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
