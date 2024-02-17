import Criteria from "./JobCriteria";
import { Link } from "react-router-dom";
import { BackendDeveloperCriteriaData } from "./CriteriaData";

function BackendDeveloperCareer() {
  return (
    
      <div className="py-5 bg-gray-100 md:py-8 lg:py-16">
        <div className="mx-5 bg-white rounded-lg shadow-lg md:rounded-xl lg:max-w-5xl lg:mx-auto md:mx-8">
          <div className="flex justify-between md:py-6 px-3 py-5 md:px-8 border-b-[2px]">
            <div className="flex gap-2">
              <h1 className="text-sm font-semibold text-slate-500 md:font-bold md:text-base">Job Title : </h1>
              <p className="text-sm font-bold text-slate-800 md:text-base">
                Backend Developer
              </p>
            </div>
            <Link to="/career" className="text-sm text-gray-800 hover:underline md:text-base">
              « Back <span className="hidden md:block">To Career</span>
            </Link>
          </div>

          <div className="md:px-4">
            <Criteria prop={BackendDeveloperCriteriaData} />
          </div>

          <div className="justify-end card-actions">
            <Link to="/career/Apply">
              <button className="py-0 my-2 mr-3 text-xs text-white bg-gray-800 md:my-4 px md:p-4 md:mx-12 btn">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    
  );
}

export default BackendDeveloperCareer;
