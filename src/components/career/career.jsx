import { Link } from "react-router-dom";
import {careerCardData} from "./cardsCareer"

function Career(){


    return(

        <>
        <div className="flex justify-center gap-24 p-16">
            <div className=" w-[40%] h-[100%]">
                <div className="">
                <h2 className="font-bold text-[28px] pb-4">Looking for new job opportunities at <br /> THN IT Solutions  </h2>
                <p className="text-[16px] pb-2">Are you passionate about software development and eager to contribute to cutting-edge technology solutions? THN IT Solutions is looking for talented individuals to join our dynamic team!</p>
                <p className="text-[16px]">At THN IT Solutions, we are at the forefront of innovation, crafting cutting-edge software solutions that empower businesses and individuals alike. Our commitment to excellence, coupled with a passion for technology, drives us to create software that makes a meaningful impact. As we continue to expand our team, we are seeking talented and motivated individuals to join us on our journey.</p>
            
                </div>
                <div className="py-8">
                    <h3 className="font-bold text-lg pb-4">Why Join THN IT Solutions</h3>
                    <li className="text-sm">Exciting and challenging projects that push the boundaries of technology.</li>
                    <li className="text-sm">Competitive salary and benefits package.</li>
                    <li className="text-sm">Opportunities for professional development and growth.</li>
                    <li className="text-sm">A collaborative and inclusive work culture that values innovation.</li>
                </div>
                </div>
            <div className="justify-center w-[40%] my-auto  h-[100%]">
                <img src="/Job Opening.PNG" alt="" height={"90%"} width={"90%"} className=" bg-cover"/>
            </div>
        </div>

        <div  className=" flex justify-center gap-2 my-8 mx-[12%] ">
            <Careercard cData={careerCardData}/>
        </div>
        </>
        


    );

};

const Careercard = ({ cData }) => 
{
  return(
    <>
    {cData.map((data) => (
     
     <div className="card bg-base-100 shadow-xl border-[2px] rounded-box ">
     <div className="card-body">
       <h2 className="card-title font-bold text-2xl"> <img src={data.url} alt="" height={"50vh"} width={"50vw"}/> {data.name}</h2>
       <p className="text-sm pl-2 pt-4">{data.description}</p>
       <div className="card-actions flex mt-4 hover:underline">
         <Link to={data.path} style={{color:"blue"}}><a className="ml-2">Explore </a>»</Link>
       </div>
        </div>
        </div>
        
      ))}
    </>
  );
};



export default Career;