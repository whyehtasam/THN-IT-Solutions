function SDLC() {
  return (
    <>
      <p className=" text-justify text-sm md:text-base my-2">
        The Software Development Life Cycle (SDLC) is a structured process used
        by software development teams to design, develop, test, deploy, and
        maintain software products. It provides a framework for managing the
        entire lifecycle of a software project from inception to retirement.
      </p>

      <div className="">
        <div className=" md:text-center">
          <p className=" font-bold text-xl md:text-4xl my-2">
            Different phases of the SDLC
          </p>
        </div>

        <div className="w-full">
          <div className="items-center md:mx-auto md:w-[30%]">
            <ul>
              
            </ul>
            <li className=" text-sm md:text-[15px] md:font-semibold md:py-[4%] text-slate-600 text-justify">
              <b className="sm:text-[18px] text-slate-800 text-justify">Planning:</b> In this
              initial phase, project stakeholders define the scope, objectives,
              requirements, and constraints of the project. This involves
              gathering requirements from clients or users, conducting
              feasibility studies, and creating a project plan.
            </li>
          </div>
        </div>

        <div className="md:flex grid md:justify-between gap-4 md:mx-[5%] m-2">
          <div className=" md:w-[30%]">
            <li className="text-sm md:text-[15px] md:font-semibold py-[4%] text-justify text-slate-600">
              <b className="sm:text-[18px] text-slate-800 ">Analysis:</b> During
              this phase, the requirements gathered in the planning phase are
              analyzed in detail. The goal is to understand the needs of users
              and stakeholders and define the functional and non-functional
              requirements of the software.
            </li>
            <li className="text-sm md:text-[15px] md:font-semibold py-[4%] text-justify text-slate-600">
              <b className="sm:text-[18px] text-slate-800 ">Design:</b> In the
              design phase, the architecture, structure, and behavior of the
              software are planned and documented. This includes designing the
              user interface, database schema, software components, and system
              architecture.
            </li>
            <li className="text-sm md:text-[15px] md:font-semibold py-[4%] text-justify text-slate-600">
              <b className="sm:text-[18px] text-slate-800 ">Implementation:</b> In
              this phase, the actual coding and development of the software take
              place based on the requirements and design specifications.
              Developers write code, create software components, and integrate
              different modules to build the final product.
            </li>
          </div>

          <div className=" md:w-[30%] items-center my-auto">
            <img src="/sdlc.jpeg" alt="" />
          </div>

          <div className=" md:w-[30%]">
            <li className="text-sm md:text-[15px] md:font-semibold py-[4%] text-justify text-slate-600">
              <b className="sm:text-[18px] text-slate-800 ">Testing:</b> Once the
              software is developed, it undergoes rigorous testing to identify
              and fix defects, errors, and bugs. Different types of testing such
              as unit testing, integration testing, system testing, and user
              acceptance testing are conducted to ensure the quality and
              reliability of the software.
            </li>
            <li className="text-sm md:text-[15px] md:font-semibold py-[4%] text-justify text-slate-600">
              <b className="sm:text-[18px] text-slate-800 ">Deployment:</b> After
              successful testing, the software is deployed or released to the
              production environment. This involves installing the software on
              servers, configuring it for use, and making it available to users.
            </li>
            <li className="text-sm md:text-[15px] md:font-semibold py-[4%] text-justify text-slate-600">
              <b className="sm:text-[18px] text-slate-800 ">Maintenance:</b> The
              maintenance phase involves supporting, updating, and enhancing the
              software over its lifecycle. This includes fixing bugs, addressing
              user feedback, adding new features, and adapting the software to
              changes in the environment or requirements.
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default SDLC;
