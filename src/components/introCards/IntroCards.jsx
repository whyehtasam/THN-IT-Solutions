import Container from "../wrappers/Container";
// import { cardDetails } from "./cardData";
import lines from "../../assets/cardsLine.svg";
const IntroCards = (props) => {
  const data = props.data;
 
  return (
    <section className="relative h-auto intro-cards">
        {/* <img src={lines} className="absolute left-0 w-full opacity-50 -top-50 " alt="svg" /> */}
        <img src={lines} className="absolute bottom-0 left-0 w-full h-full opacity-50 " alt="svg" />
      <Container className={"w-full h-full justify-items-center grid lg:grid-cols-3 gap-2 p-2 " + props.containerStyle}>

        {data.map(({id,title,description}) => <div className={"lg:m-2 mx-4 card h-auto bg-base-100 shadow-md md:hover:scale-[1.01] md:hover:-translate-y-1 transition-all duration-300 " + props.cardStyle} key={id}>
          <div className="p-5 card-body">
            <h2 className="text-lg card-title lg:text-2xl">{title}</h2>
            <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
            <p className="text-xs text-justify text-gray-800 lg:text-sm ">{description}</p>
            
          </div>
        </div>)}
        
      </Container>
    </section>
  );
};

export default IntroCards;
