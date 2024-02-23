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

      {/* <div className="grid grid-cols-3 place-content-center gap-4 mx-16 gap-top-5 m-20"> */}
      <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  place-items-evenly gap-4 mx-16 gap-top-5 m-20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white  "
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




      {/* <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white "> */}
      {/* <div className="justify-center mb-2">
            <img src="/call2.png" className=" w-20 h-20  flex bg-blue"></img>
          </div>
          <h3 className="text-left text-lg font-semibold mb-4">
            Sales and support of Woodward product
          </h3>
          <p className=" text-sm text-justify  font-medium   text-gray-500">
            TSN Technosolutions is the channel partner of Woodward India.
            Woodward has established a strong reputation for designing and
            manufacturing high-quality control system, including control relays,
            that ensure safe and efficient operations of industrial equipment
          </p>
          
         
         </div> */}

      {/* <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white">
          <div className="justify-center mb-2">
            <img src="/headphone.png" className=" w-20 h-20  flex"></img>
          </div>
          <h3 className="text-left text-lg font-semibold mb-4">
            Sales and support of SEG product.
          </h3>
          <p className=" text-sm text-justify font-medium   text-gray-500">
            TSN Technosolutions is the channel partner of SEG India. Look no
            further than SEG. Our global network of service centers and
            distributors ensures that we are always there for our customers, no
            matter where they are located
          </p> 

          
         </div> */}

      {/* <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white">
          <div className="justify-center mb-2">
            <img src="/cs.png" className=" w-20 h-20  flex"></img>
          </div>
          <h3 className="text-left text-lg font-semibold mb-4">
            Support of Remote monitoring Device
          </h3>
          <p className=" text-sm text-justify font-medium   text-gray-500">
            TSN Technosolutions provide remote monitoring device support should
            also include regular updates and maintenance services to ensure that
            the device is operating at peak efficiency. This can include
            software updates, security patches, and system upgrades
          </p> 

          
         </div> */}

      {/* <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white">
          <div className="justify-center mb-2">
            <img src="/settings.png" className=" w-20 h-20  flex"></img>
          </div>
          <h3 className="text-left text-lg font-semibold mb-4">
            Annual Maintenance Of Automation Panel
          </h3>
          <p className=" text-sm text-justify font-medium   text-gray-500">
            TSN Technosolutions provide annual maintenance of automation panels
            is an important investment for any organisation that relies on
            automation systems for their operations, ensuring maximum uptime and
            reliability while minimising maintenance costs and the risk of
            downtime
          </p> 

          
         </div>  */}

      {/* <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white">
          <div className="justify-center mb-2">
             <img src="/complain.png" className=" w-20 h-20  flex"></img>
           </div>
           <h3 className="text-left text-lg font-semibold mb-4">
             Retrofitting and on Call servicing
           </h3>
           <p className=" text-sm text-justify font-medium text-gray-500">
             TSN Technosolutions have more advanced components, allowing
             organization to take advantage of the latest technology and improve
             the performance of their operations. This can include anything from
             replacing motors and drives to upgrading entire control systems
           </p> 

          
         </div> */}

      {/* <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 w-42 h-42 bg-white">
          <div className="justify-center mb-2">
            <img src="/powerplant.png" className=" w-20 h-20  flex"></img>
          </div>
          <h3 className="text-left text-lg font-semibold mb-4">
            Power Plant Automation Service
          </h3>
          <p className=" text-sm text-justify font-medium  text-gray-500">
            Overall, power plant automation service is essential for modern
            power generation facilities, allowing operators to optimize their
            operations, reduce costs, and ensure maximum uptime and reliability
          </p> 

          
         </div>  */}
    </>
  );
}

export default Portcard;
