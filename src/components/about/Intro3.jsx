import Container from "../wrappers/Container";
import { introCardData } from "../introCards/cardData";
import svg from "../../assets/lines.svg";
const Intro3 = () => {
  const [card1, card2] = introCardData;

  return (
    <section className="intro3 pb-16 px-28 h-[90vh]  p-0">
        <img src={svg} className="w-full  opacity-50 absolute left-0 " alt="svg" />
        <h1 className="text-5xl pt-8 h-max text-center font-bold">
          Expert Insights and Industry Authority
        </h1>
      <Container className="w-full h-full ">
        <div className="h-full  grid grid-cols-2 ">
          <div className="flex flex-1 px-20 py-6  h-auto place-items-start">
            <div
              className="card bg-base-100 h-72  shadow-xl  hover:-translate-y-1 transition-all duration-300"
              key={card1.id}
            >
             <div className="card-body h-max">
                <h2 className="card-title text-3xl">{card1.title}</h2>
                <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                <p className="text-justify text-sm  leading-loose text-gray-800 ">
                  {card1.description}
                </p>
              </div>
             </div>
          </div>
          <div className="flex-1 px-20 py-6 flex place-items-end">
            <div
              className="card h-72 bg-base-100 shadow-xl hover:-translate-y-1 transition-all duration-300"
              key={card2.id}
            >
              <div className="card-body">
                <h2 className="card-title text-3xl ">{card2.title}</h2>
                <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                <p className="text-justify text-sm leading-loose text-gray-800 ">
                  {card2.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro3;
