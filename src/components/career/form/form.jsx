import React, { useState } from 'react';
//import logo from "";
const ApplyForm = () => {


    const [isSameAsPresent, setIsSameAsPresent] = useState(false);
    const [isFresher, setFresher] = useState(false)
    //const [ismale, setMale] = useState(false)

  const handelSameAddress = () => {
    setIsSameAsPresent((prevValue) => !prevValue);
  };
  
  const handelFresher = () => {
    setFresher((prevValue) => !prevValue);
  };

  return (

    <div className="bg-[#d6d6d6]  text-[#282828] font-semibold p-8">
        <div className=' bg-[#ffffff] shadow-xl md:rounded-2xl  p-5 md:p-8 md:max-w-6xl md:mx-auto'>
            <div className='flex bg-slate-200 items-center md:justify-between rounded my-auto px-2 md:px-[5vw] py-[1vh]'>
                <div>
                <img src="/logo.jpg"
                  className="h-16 mix-blend-multiply hidden md:block"
                  alt="" />
                </div>
                <div>
                <h2 className=' mx-auto font-sans font-bold text-2xl text-[#3a3a3a]'>Job Application</h2>
                </div>
                

            </div>

            <form action="" method="post">
            <div className='flex px-[2%] py-[2%] justify-between md:justify-start items-center my-auto'>
                <h3 className='text-sm'><span className='text-[red] '>*</span>Position Applying for :</h3>
                <select name="" id="position" className='ml-4 border-[1px] p-1 md:rounded-lg rounded-md selection:border-[1px] text-sm'>
                    <option value="Web Developer" className='p-4 border-none'>Web Developer</option>
                    <option value="Backend Developer" className='p-4 border-none'>Backend Developer</option>
                    <option value="Cloud Developer" className='p-4 border-none'>Cloud Developer</option>
                </select>
            </div>

            <div className='Main-container mb-[2%]'>
                

                <div className='container px-[2%]'>
                    <h2  className='mb-4 text-lg font-bold text-left md:underline'>Personal Information</h2>

                <div className='grid grid-cols-1 md:flex mb-[2vh] md:justify-between '>
                    <label className="w-full md:max-w-xs  form-control ">
                    <div className="label">
                        <span className="label-text">First Name<span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="First Name" className="w-full md:max-w-xs input input-md input-bordered" />
                    
                    </label>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Middle Name</span>
                    </div>
                    <input type="text" placeholder="Middle Name(Optional)" className="w-full md:max-w-xs input  input-md input-bordered" />
                    
                    </label>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Last Name<span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="Last Name" className="w-full md:max-w-xs input   input-md input-bordered" />
                    
                    </label>
                </div>

                <div className='grid grid-cols-1 md:flex mb-[2vh] justify-between'>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Phone No. <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="Phone Number" className="w-full md:max-w-xs input  input-md input-bordered" />
                    </label>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Email <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="Email" className="w-full md:max-w-xs input  input-md input-bordered" />
                    </label>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Date of Birth <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="date" placeholder="dd-mm-yyyy" className="w-full md:max-w-xs input  input-md input-bordered" />
                    </label>
                </div>
                <div className=''>
                <label className="">Gender <span className='text-[red]'>*</span></label>
                <div className='flex mx-4 my-4'>
                <div className='flex items-center my-auto'>
                    <label className=' label'>Female </label>
                    <input type="checkbox" className="checkbox checkbox-xs mx-[1vh]"/> 
                </div>
                <div className='flex items-center my-auto mx-[1vw]'>
                    <label className='label'>Male </label>
                    <input type="checkbox" className="checkbox checkbox-xs mx-[1vh]"/> 
                </div>
                <div className='flex items-center my-auto mx-[1vw]'>
                    <label className='label'>Others </label>
                    <input type="checkbox" className="checkbox checkbox-xs mx-[1vh]"/> 
                </div>
                </div>
                </div>
                <div>
                    
                </div>
            </div>

            
                <div className='container'>
                <h2 className='px-4 mb-4 text-lg font-bold text-left md:underline'>Address Information</h2>

                    <div className=' px-[2%] my-[2%]'>
                        <div>
                        <h3 className='font-bold'><span className='text-[red]'>*</span> Present Address :</h3>
                        </div>
                            
                            <div className='md:flex md:justify-between '>
                            <label className="w-full md:max-w-xs form-control ">
                            <div className="label">
                                <span className="label-text">Address Line 1<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Building/House No." className="w-full md:max-w-xs input  input-md input-bordered" />
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Address Line 2</span>
                            </div>
                            <input type="text" placeholder="Street/lane" className="w-full md:max-w-xs input  input-md input-bordered" />
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">City<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="City" className="w-full md:max-w-xs input  input-md input-bordered" />
                            
                            </label>
                            </div>
                            <div className='md:flex justify-between '>
                            <label className="w-full md:max-w-xs form-control ">
                            <div className="label">
                                <span className="label-text">State<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="State" className="w-full md:max-w-xs input  input-md input-bordered" />
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Pin Code <span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Pin Code" className="w-full md:max-w-xs input  input-md input-bordered" />
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Country<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Country" className="w-full md:max-w-xs input  input-md input-bordered" />
                            
                            </label>
                            </div>
                    </div>

                            <div className='flex items-center my-auto mx-[2%]'>
                                    <label className='text-[#272727]'>same as Present address : </label>
                                    <input type="checkbox" className=" ml-[1vh] border-[2px] border-[#338598]" id='peer' onChange={handelSameAddress}/> 
                                </div>

                    <div className=' px-[2%] my-[2%]'>
                        <h3 className='font-bold'>Permanent Address :</h3>
                        
                      
                            
                            <div className=''>
                            <div className='md:flex justify-between'>
                            <label className="w-full md:max-w-xs form-control ">
                            <div className="label">
                                <span className="label-text">Address Line 1<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Building/House No." className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Address Line 2</span>
                            </div>
                            <input type="text" placeholder="Street/lane" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">City<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="City" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            </div>
                            <div className='md:flex justify-between'>
                            <label className="w-full md:max-w-xs form-control ">
                            <div className="label">
                                <span className="label-text">State<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="State" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Pin Code <span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Pin Code" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Country<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Country" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            </div>
                            </div>
                    </div>

                </div>

                <div className='container'>
                <h2  className='px-4 mb-4 text-lg font-bold text-left md:underline'>Education Qualification</h2>
                        
                        <div className='grid grid-cols-1 md:flex justify-between mx-[2%] my-[1%]'>

                        
                        <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Name of School/University/Institute<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Name of Institute" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Major/Area of Study<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Stream" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="label-text">Year of Graduation/Passing<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="YYYY" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isSameAsPresent}/>
                            </label>
                    </div>
                    <div className='md:flex my-auto items-center py-[1%] mx-[2%] gap-[2%]'>
                        <label className='label'>Training certifications, If any : </label>
                    <input type="file" className="file-input file- input-md input-bordered w-full md:min-w-[5vw] md:h-[6vh] md:max-w-xs" />
                </div>

                </div>

                <div className='container '>
                <h2  className='mt-[3%] mb-[2%] px-4 text-left text-lg font-bold md:underline'>Work Experience</h2>

                <div className='flex items-center my-auto mx-[1vw] gap-[2%]'>
                    <label className='label'>Fresher </label>
                    <input type="checkbox" className=" border-[#000] mx-[1vh]" onChange={handelFresher}/> 
                </div>

                <div className='md:flex justify-between mx-[2%] gap-[1%] my-[2vh]'>
                <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Company Name : <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="company" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isFresher}/>
                    </label>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Job Title : <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="position" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isFresher}/>
                    </label>
                    <label className="w-full md:max-w-xs form-control">
                    <div className="label">
                        <span className="label-text">Joining Date : <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="date" placeholder="dd-mm-yyyy" className="w-full md:max-w-xs input  input-md input-bordered" disabled={isFresher}/>
                    </label>
                    
                </div>
                <label className="form-control w-full md:max-w-xs mx-[2%]">
                    <div className="label">
                        <span className="label-text">Reason for Leaving : <span className='text-[red]'>*</span></span>
                    </div>
                    <textarea type="date" placeholder="write here" className="input  input-md input-bordered w-[70vw] h-[12vh] md:max-w-xs" disabled={isFresher}/>
                </label>
                <div>

                </div>
                </div>

                <div className='container'>
                <h2  className='mt-[3%] mb-[2%] px-4 text-left text-lg font-bold md:underline'>Skills & Qualification</h2>

                    <div className='md:w-[50%] mx-[3%]'>

                        <div className='md:flex justify-between pb-[1%] items-center my-auto'><label htmlFor="">Technical skills : </label><input type="text" placeholder="Write your tech Skills, use comma to separate" className="w-full md:max-w-xs input  input-md input-bordered" /></div>
                        <div className='md:flex justify-between pb-[1%] items-center my-auto'><label htmlFor="">Soft skills : </label><input type="text" placeholder="Write your soft skills, use comma to separate" className="w-full md:max-w-xs input  input-md input-bordered" /></div>
                        <div className='md:flex justify-between pb-[1%] items-center my-auto'><label htmlFor="">Certifications : </label><input type="text" placeholder="Certificate details, use comma to separate" className="w-full md:max-w-xs input  input-md input-bordered" /></div>
                    

                    </div>


                </div>

            </div>
            <div className='my-auto items-center p-[2%]'>
                            <label className="w-full md:max-w-xs form-control">
                            <div className="label">
                                <span className="font-bold">Upload CV <span className='text-[red]'>*</span></span>
                            </div>
                            <input type="file" className="w-full md:max-w-xs file-input file- input-md input-bordered" />
                            </label>
                </div>  

                <div className="card-actions justify-end border-t-[2px] pt-[1%]">
      <button className="btn font-bold text-white bg-[#014aaa] hover:bg-[#4886b5] md:w-[8vw] text-lg">Submit</button>
    </div>
                </form>
        </div>
    
    </div>
  );
};

export default ApplyForm;
