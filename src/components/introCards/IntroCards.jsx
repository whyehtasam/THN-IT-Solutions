import Container from "../wrappers/Container";
// import { cardDetails } from "./cardData";
import lines from "../../assets/cardsLine.svg";
const IntroCards = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <section className="intro-cards h-auto   relative">
        {/* <img src={lines} className="w-full opacity-50 absolute left-0 -top-50  " alt="svg" /> */}
        <img src={lines} className="w-full opacity-50 h-full absolute left-0 bottom-0  " alt="svg" />
      <Container className={"w-full h-full justify-items-center grid lg:grid-cols-2 gap-5 p-2 " + props.containerStyle}>

        {data.map(({id,title,description}) => <div className={"m-2 card h-auto bg-base-100 shadow-md hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 " + props.cardStyle} key={id}>
          <div className="card-body">
            <h2 className="card-title lg:text-2xl">{title}</h2>
            <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
            <p className="text-justify text-xs lg:text-sm text-gray-800 ">{description}</p>
            
          </div>
        </div>)}
        
      </Container>
    </section>
  );
};

export default IntroCards;
