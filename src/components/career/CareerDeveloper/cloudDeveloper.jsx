import Criteria from './JobCriteria';
import { Link } from 'react-router-dom';
import {CloudDeveloperCriteriaData} from './CriteriaData';


function CloudDeveloperCareer(){


    return(

        <>
        <div className=" bg-gray-100 m-0 py-[5%] px-[15%]"> 

        <div className="bg-white shadow-lg rounded-xl">

        <div className="flex justify-between py-6 px-8 border-b-[2px]">
                <div className="flex gap-2">
                <h1 className="text-slate-500 font-bold">Job Title : </h1>
                <p className="text-slate-800 font-bold tex-sm">Cloud Developer</p>
                </div>
                <Link to="/career" className='text-blue-800 hover:underline'>« Back To Career</Link>

            </div>

            <div className='px-4'>
            <Criteria prop={CloudDeveloperCriteriaData}/>
            </div>

            <div className=''>
            <Link ><button className='btn btn-primary m-4 relative rigth-1' 
                onClick={()=>alert('Contact the company for further information')}>
                Apply Now</button></Link>
            </div>
            
        </div>
        </div>
        </>

    );


}

export default CloudDeveloperCareer;