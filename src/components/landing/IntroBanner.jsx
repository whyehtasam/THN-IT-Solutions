import Container from "../wrappers/Container";
import svg from "../../assets/banner.svg";
const IntroBanner = (props) => {
  return (
    <section className="h-auto banner lg:pb- md:pb-8 md:px-14 lg:px-8">
      <Container className={`relative flex flex-col items-center justify-center w-full overflow-hidden border-white rounded-lg h-28 lg:min-h-60 drop-shadow-md ` + props.style}>
        <img
          src={props.img}
          className="absolute object-cover w-full h-full "
          alt="img"
        />
        <div className={props.opacity}></div>
        <h1 className="text-lg font-bold text-white lg:text-5xl md:2xl w-max drop-shadow-md animate-pulse">
          {props.title}
        </h1>
        
      </Container>
    </section>
  );
};

export default IntroBanner;
