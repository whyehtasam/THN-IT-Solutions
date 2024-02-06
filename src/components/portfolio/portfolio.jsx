// import "./global.css";

 const Portfolio = () => {

    return(
        <section>
       <div className="row">
     <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"> 
	<h2 
	
	className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                  >
                  Our Companys
               </h2>
    </div>
	</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full p-4">
      <div className="">
        <div className="card">
          <div className="icon-wrapper">
            
          </div>
          <h3 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">TSN Automation</h3>
          <p>
			TSNT Solutions Pvt. Ltd. is to deliver best quality that meets and fulfill customer expectations and by leveraging knowledge, experience, technology, best practice-progress-people and ideas in Industry and proactive business
          </p>
        </div>
      </div>
      <div className="">
        <div className="card">
          <div className="icon-wrapper">
           
          </div>
          <h3 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">TSN Technosolutions</h3>
          <p>
          TSNT Solutions Pvt. Ltd. provides Annual Maintenance for panels .We has a team of dedicated engineers and technicians for maintain the work. TSNT Solutions Pvt. Ltd. provides Three type of Maintenance services
          </p>
        </div>
      </div>
      <div className="">
        <div className="card">
          <div className="icon-wrapper">
           
          </div>
          <h3 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">Altarnative Power Solutions</h3>
          <p>
           Any generator set used for emergency or primary source must have periodic service and maintenance performed. Setting up a planned maintenance schedule, and performing all associated testing will insure generator 
         
          </p>
        </div>
      </div>
      <div className="">
        <div className="card">
          <div className="icon-wrapper">
            
          </div>
          <h3 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">TSNT IT Solutions</h3>
          <p>
          THN IT Solutions, we believe in the power of technology to transform businesses and streamline operations. As a premier software startup, we specialize in delivering cutting-edge solutions tailored to meet the unique needs of your enterprise.
          </p>
        </div>
      </div>
      
    
    </div>
  </section>
    
    )


 }

 export default Portfolio;