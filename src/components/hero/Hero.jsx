import Container from "../wrappers/Container";
import Button from "../button/Button";
import svg from '../../assets/coding-workshop-animate.svg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero p-16 h-[90vh]">
      <Container className="flex  w-full h-full shadow-md">
        <div className="title grid gap-3 h-full ">
          <h1 className="text-6xl w-max font-bold drop-shadow-md">THN IT Solutions Pvt Ltd</h1>
          <h1 className="text-5xl font-bold leading-normal drop-shadow">
            Your Vison, Our Solution,
            <br /> Infinite Posiibilties
          </h1>
          <p className="text-3xl  text-slate-300 font-semibold  drop-shadow-sm">
            Your Gateway to Innovative Software Solutions
          </p>
          <p className="text-3xl  text-slate-300 font-semibold drop-shadow-sm">
            Do you have an Idea, Let's Build it Together!
          </p>
          <div className="Buttons mt-4" >
            <Link to='/contact'><Button className="btn mr-10 btn-neutral text-white rounded px-6 hover:drop-shadow-md">Contact Us</Button></Link>
            <Button className="btn bg-slate-100 border px-6 hover:drop-shadow-sm">Explore Our Experties</Button>
          </div>
        </div>
        <div className="img p-6">
            <img src={svg} alt=""  className="h-full object-cover drop-shadow-lg"/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
