import SDLC from "./SDLC";
import SoftwareMethodology from './SoftwareMethodology'
import CICD from './CICD'
import WebDevelopmentProcess from './WebDevelopmentProcess'

function ProcessOverView(){

    return(
        <>

        
          <div className="join join-vertical mx-[5%]">
          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" checked="checked" /> 
            <div className="collapse-title text-2xl font-bold bg-[#e3eeff]  h-[10vh] px-[5%]">
              Software Development Life Cycle (SDLC)
            
            </div>
            <div className="collapse-content"> 
                <SDLC />
            </div>
          </div>





          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4"/> 
            <div className="collapse-title text-2xl font-bold bg-[#e3eeff]  h-[10vh] px-[5%]">
            Software Methodology
            </div>
            <div className="collapse-content"> 
                <SoftwareMethodology />
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4 " /> 
            <div className="collapse-title text-2xl bg-[#e3eeff] font-bold  h-[10vh] px-[5%]">
            Web Development Process 
            </div>
            <div className="collapse-content"> 
                <WebDevelopmentProcess />
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 ">
            <input type="radio" name="my-accordion-4" /> 
            <div className="collapse-title text-2xl bg-[#e3eeff] font-bold  h-[10vh] px-[5%]">
              Continuous Integration and Continuous Delivery (CICD)
          
            </div>
            <div className="collapse-content"> 
                <CICD />
            </div>
          </div>

</div>
        </>
    )
}

export default ProcessOverView;