
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//import { Link } from "react-router-dom";
import { cardData } from "./achievementData";

function Portcard() {
  return (
  <>
      <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
        <div className="">
          <h3 className="text-4xl font-bold p-2">What We Offer?</h3>
          <h3 className="text-sm p-2">
            The hospital plays a statewide services includes the Acquired
          </h3>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-evenly gap-4 mx-16 gap-top-5 m-20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white "
          >
            <div className="w-20 h-20  flex bg-blue">

              <img
                src={card.imgSrc}
                className="flex w-25 h-25"
                alt={card.title}
              />
            </div>
            <div>

              <h3 className="text-left text-lg font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-justify  font-medium   text-gray-500">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </>
      )
        }




   

   

    

      

    

     
    

      
     


export default Portcard;
