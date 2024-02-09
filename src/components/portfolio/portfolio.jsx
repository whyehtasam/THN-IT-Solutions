// import "./global.css"
//import SimpleSlider from "./slider";
 import Testimonial from "./testimonial";
import Portcard from "./portcard"


 const Portfolio = () => {

    return(
       <>
         <div className="flex justify-center gap-24 p-16">
            <div className=" w-[50%] h-[100%]">
                <div className="">
                <h2 className="font-bold text-[28px] pb-4">Software Development Life Cycle (SDLC)  </h2>
                <p className="text-[16px] pb-2">The Software Development Life Cycle (SDLC) is a structured process used by software development teams to design, develop, test, deploy, and maintain software products. It provides a framework for managing the entire lifecycle of a software project from inception to retirement. Here are the typical phases of the SDLC:</p>
                <p className="text-[16px]"><b>Planning:</b> In this initial phase, project stakeholders define the scope, objectives, requirements, and constraints of the project. This involves gathering requirements from clients or users, conducting feasibility studies, and creating a project plan.</p>
                <p className="text-[16px]"><b>Analysis:</b> During this phase, the requirements gathered in the planning phase are analyzed in detail. The goal is to understand the needs of users and stakeholders and define the functional and non-functional requirements of the software.</p>
                <p className="text-[16px]"><b>Design:</b> In the design phase, the architecture, structure, and behavior of the software are planned and documented. This includes designing the user interface, database schema, software components, and system architecture.</p>
                <p className="text-[16px]"><b>Implementation</b> In this phase, the actual coding and development of the software take place based on the requirements and design specifications. Developers write code, create software components, and integrate different modules to build the final product.</p>
                <p className="text-[16px]"><b>Testing:</b> Once the software is developed, it undergoes rigorous testing to identify and fix defects, errors, and bugs. Different types of testing such as unit testing, integration testing, system testing, and user acceptance testing are conducted to ensure the quality and reliability of the software.</p>
                <p className="text-[16px]"><b>Deployment:</b> After successful testing, the software is deployed or released to the production environment. This involves installing the software on servers, configuring it for use, and making it available to users.</p>
                <p className="text-[16px]"><b>Maintenance:</b> The maintenance phase involves supporting, updating, and enhancing the software over its lifecycle. This includes fixing bugs, addressing user feedback, adding new features, and adapting the software to changes in the environment or requirements.</p>
                </div>
               
                </div>
            <div className="justify-center w-[30%] my-auto  h-[100%]">
                <img src="/sdlc.jpeg" alt="" height={"90%"} width={"90%"} className="bg-cover  mix-blend-multiply"/>
            </div>
        </div>



         <div className="justify-center ">
          <h3 className="text-4xl text-center">Our Key Deliveries</h3>
        </div>
        <br/>
        <br/>
        <div  >
          <Portcard/>
          </div>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
          <div className="justify-center p-20">
          <h3 className="text-4xl text-center ">What Our Client say</h3>
        </div>
    
          <div >
          <Testimonial/>
          
          </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Portfolio;
