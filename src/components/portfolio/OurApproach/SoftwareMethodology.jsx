

function SoftwareMethodology()
{

    return(

        <>
        <p className="pb-[3%] md:mx-[5%] mt-[2%] text-sm sm:text-base">The waterfall and agile methodologies are two different approaches to software development, each with its own set of principles, practices, and advantages.</p>
        
        <div className="my-[2%] md:mx-[5%]">

            <img src="/methogoly.jpeg" alt="methogoly.jpeg" className="rounded mx-auto items-center " />
        

        <div className="md:flex justify-between gap-[4%]">

        <div className="">
        <h2 className="text-xl sm:text-[32px] text-start px-4 py-4 font-bold">Waterfall Methodology</h2>

        <div className=" text-justify">
            <li className="text-sm sm:text-[15px] sm:font-semibold sm:py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Sequential Process :</b> 
            In the waterfall model, the development process is divided into sequential phases, such as requirements analysis, design, implementation,
             testing, deployment, and maintenance. Each phase must be completed before moving on to the next.</li>
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Predictive Planning :</b> Waterfall relies on detailed upfront planning and documentation. Requirements are gathered and documented extensively at the beginning of the project, and changes are discouraged once development begins.</li>
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Long Development Cycle :</b> Projects using the waterfall model typically have long development cycles, as each phase must be completed before moving on to the next. This can lead to delays in delivering the final product.</li>
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Less Flexibility :</b> The waterfall model is less flexible to changes in requirements or customer feedback once the project is underway. Changes are difficult and costly to implement once the design phase is complete.</li>
        </div>
        </div>

        <div className="">
        <h2 className="text-xl md:text-[32px] md:text-end px-4 py-4 font-bold">Agile Methodology</h2>

        <div className="text-justify">
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Iterative and Incremental :</b> 
            Agile development is based on iterative and incremental development. Instead of working in sequential phases, the project is divided into small, manageable iterations or sprints. Each iteration delivers a working piece of the software.</li>
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Adaptive Planning :</b> Agile embraces change and allows for flexibility in requirements. Instead of trying to predict all requirements upfront, Agile teams adapt to changing requirements and feedback throughout the project.</li>
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Short Development Cycle :</b> Agile projects have shorter development cycles due to the iterative nature of development. This allows for faster delivery of working software and early feedback from stakeholders.</li>
            <li className="text-sm sm:text-[15px] sm:font-semibold py-[4%] text-slate-600"><b className="sm:text-[18px] text-slate-800">Customer Collaboration :</b> Agile encourages close collaboration with customers and stakeholders throughout the development process. Regular meetings and demos ensure that the software meets the customer's expectations and requirements.</li>
        </div>
        </div>


        </div>
        </div>
        </>

    )
}

export default SoftwareMethodology;