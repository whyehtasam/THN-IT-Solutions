import Container from "../wrappers/Container";
import { cardDetails } from "./cardData";
import lines from "../../assets/cardsLine.svg";
const IntroCards = () => {
  return (
    <section className="intro-cards h-auto pb-16 px-28 relative">
        <img src={lines} className="w-full opacity-50 absolute left-0 bottom-0  " alt="svg" />
      <Container className="w-full h-full  grid grid-cols-3 gap-8 p-2">

        {cardDetails.map(({id,title,description}) => <div className="card  bg-base-100 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300" key={id}>
          <div className="card-body">
            <h2 className="card-title ">{title}</h2>
            <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
            <p className="text-justify text-sm text-gray-800 ">{description}</p>
            
          </div>
        </div>)}
        
      </Container>
    </section>
  );
};

export default IntroCards;
