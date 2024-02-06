import Container from "../wrappers/Container";
import svg from "../../assets/banner.svg";
const IntroBanner = (props) => {
  return (
    <section className="banner m-6 lg:pb-16 md:pb-8 md:px-14 lg:px-28 h-auto">
      <Container className="flex flex-col justify-center items-center w-full h-28 lg:min-h-60 rounded-lg drop-shadow-md border-white bg-gradient-to-r from-gray-900 via-gray-700 to-black relative overflow-hidden">
        <img
          src={svg}
          className="object-cover w-full h-full absolute "
          alt="img"
        />
        <h1 className="lg:text-5xl md:2xl text-lg w-max text-white font-bold drop-shadow-md animate-pulse">
          {props.title}
        </h1>
        
      </Container>
    </section>
  );
};

export default IntroBanner;
