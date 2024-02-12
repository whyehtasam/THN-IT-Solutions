import SDLC from "./SDLC";
import SoftwareMethodology from './SoftwareMethodology'
import CICD from './CICD'
import WebDevelopmentProcess from './WebDevelopmentProcess'

function ProcessOverView(){

    return(
        <>
        <div className=" items-center ">

        
          <div className="join join-vertical items-center justify-center mx-[5%]">
          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" checked="checked" /> 
            <div className="collapse-title text-xl font-medium bg-[#9fd4fc] h-[10vh]">
            <div className=" flex relative " >
                            <div className=" w-[100%] bg items-center my-auto mx-[5%] ">
                            <h2 className=" text-2xl font-bold ">Software Development Life Cycle (SDLC)</h2>
                              </div>
                          
                          </div>
            
            </div>
            <div className="collapse-content"> 
                <SDLC />
            </div>
          </div>





          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium bg-[#9fd4fc] h-[10vh]">
            <div className=" flex relative " >
                            <div className=" w-[100%] bg items-center my-auto mx-[5%] ">
                            <h2 className=" text-2xl font-bold ">Software Methodology</h2>
                              </div>
                          
                          </div>
            
            </div>
            <div className="collapse-content"> 
                <SoftwareMethodology />
            </div>
          </div>



          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-xl font-medium bg-[#9fd4fc] h-[10vh]">
            <div className=" flex relative " >
                            <div className=" w-[100%] bg items-center my-auto mx-[5%] ">
                            <h2 className=" text-2xl font-bold ">Continuous Integration and Continuous Delivery (CICD)</h2>
                              </div>
                          
                          </div>
            
            </div>
            <div className="collapse-content"> 
                <CICD />
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4"/> 
            <div className="collapse-title text-xl font-medium bg-[#9fd4fc] h-[10vh]">
            <div className=" flex relative " >
                            <div className=" w-[100%] bg items-center my-auto mx-[5%] ">
                            <h2 className=" text-2xl font-bold ">Web Development Process</h2>
                              </div>
                          
                          </div>
            
            </div>
            <div className="collapse-content"> 
                <WebDevelopmentProcess />
            </div>
          </div>
</div>
</div>
        </>
    )
}

export default ProcessOverView;