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

    <div className="bg-[#d6d6d6] px-[10%] py-[2%] text-[#282828] font-semibold">
        <div className=' bg-[#ffffff] shadow-xl rounded-2xl p-8'>
            <div className='flex bg-slate-200 items-center justify-between rounded my-auto px-[5vw] py-[1vh]'>
                <div>
                <img src="/logo.jpg"
                  className="h-16 mix-blend-multiply"
                  alt="" />
                </div>
                <div>
                <h2 className=' mx-auto font-sans font-bold text-2xl text-[#3a3a3a]'>Job Application</h2>
                </div>
                

            </div>

            <form action="" method="post">
            <div className='flex px-[2%] py-[2%] items-center my-auto'>
                <h3><span className='text-[red]'>*</span>Position Applying for :</h3>
                <select name="" id="position" className='ml-4 border-[1px] p-1 rounded-lg selection:border-[1px]'>
                    <option value="Web Developer" className='p-4 border-none'>Web Developer</option>
                    <option value="Backend Developer" className='p-4 border-none'>Backend Developer</option>
                    <option value="Cloud Developer" className='p-4 border-none'>Cloud Developer</option>
                </select>
            </div>

            <div className='Main-container mb-[2%]'>
                

                <div className='container px-[2%]'>
                    <h2  className='mb-4 text-left text-lg font-bold underline'>Personal Information</h2>

                <div className='flex mb-[2vh] justify-between'>
                    <label className="form-control w-full max-w-xs ">
                    <div className="label">
                        <span className="label-text">First Name<span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    
                    </label>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Middle Name</span>
                    </div>
                    <input type="text" placeholder="Middle Name(Optional)" className="input input-bordered w-full max-w-xs" />
                    
                    </label>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Last Name<span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                    
                    </label>
                </div>

                <div className='flex mb-[2vh] justify-between'>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Phone No. <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Date of Birth <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="date" placeholder="dd-mm-yyyy" className="input input-bordered w-full max-w-xs" />
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
                <h2 className='mb-4 px-4 text-left text-lg font-bold underline'>Address Information</h2>

                    <div className=' px-[2%] my-[2%]'>
                        <div>
                        <h3 className='font-bold'><span className='text-[red]'>*</span> Present Address :</h3>
                        </div>
                            
                            <div className=' flex justify-between'>
                            <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">Address Line 1<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Building/House No." className="input input-bordered w-full max-w-xs" />
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Address Line 2</span>
                            </div>
                            <input type="text" placeholder="Street/lane" className="input input-bordered w-full max-w-xs" />
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">City<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" />
                            
                            </label>
                            </div>
                            <div className=' flex justify-between'>
                            <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">State<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="State" className="input input-bordered w-full max-w-xs" />
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pin Code <span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Pin Code" className="input input-bordered w-full max-w-xs" />
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Country<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Country" className="input input-bordered w-full max-w-xs" />
                            
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
                            <div className='flex justify-between'>
                            <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">Address Line 1<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Building/House No." className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Address Line 2</span>
                            </div>
                            <input type="text" placeholder="Street/lane" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">City<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            </div>
                            <div className='flex justify-between'>
                            <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text">State<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="State" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pin Code <span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Pin Code" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Country<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Country" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            </div>
                            </div>
                    </div>

                </div>

                <div className='container'>
                <h2  className='mb-4 px-4 text-left text-lg font-bold underline'>Education Qualification</h2>
                        
                        <div className='flex justify-between mx-[2%] my-[1%]'>

                        
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name of School/University/Institute<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Name of Institute" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Major/Area of Study<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="Stream" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            
                            </label>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Year of Graduation/Passing<span className='text-[red]'>*</span></span>
                            </div>
                            <input type="text" placeholder="YYYY" className="input input-bordered w-full max-w-xs" disabled={isSameAsPresent}/>
                            </label>
                    </div>
                    <div className='flex my-auto items-center py-[1%] mx-[2%] gap-[2%]'>
                        <label className='label'>Training certifications, If any : </label>
                    <input type="file" className="file-input file-input-bordered min-w-[5vw] h-[6vh] max-w-xs" />
                </div>

                </div>

                <div className=' container'>
                <h2  className='mt-[3%] mb-[2%] px-4 text-left text-lg font-bold underline'>Work Experience</h2>

                <div className='flex items-center my-auto mx-[1vw] gap-[2%]'>
                    <label className='label'>Fresher </label>
                    <input type="checkbox" className=" border-[#000] mx-[1vh]" onChange={handelFresher}/> 
                </div>

                <div className='flex justify-between mx-[2%] gap-[1%] my-[2vh]'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Company Name : <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="company" className="input input-bordered w-full max-w-xs" disabled={isFresher}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Job Title : <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="text" placeholder="position" className="input input-bordered w-full max-w-xs" disabled={isFresher}/>
                    </label>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Joining Date : <span className='text-[red]'>*</span></span>
                    </div>
                    <input type="date" placeholder="dd-mm-yyyy" className="input input-bordered w-full max-w-xs" disabled={isFresher}/>
                    </label>
                    
                </div>
                <label className="form-control w-full max-w-xs mx-[2%]">
                    <div className="label">
                        <span className="label-text">Reason for Leaving : <span className='text-[red]'>*</span></span>
                    </div>
                    <textarea type="date" placeholder="write here" className="input input-bordered w-[70vw] h-[12vh] max-w-xs" disabled={isFresher}/>
                </label>
                <div>

                </div>
                </div>

                <div className='container'>
                <h2  className='mt-[3%] mb-[2%] px-4 text-left text-lg font-bold underline'>Skills & Qualification</h2>

                    <div className='w-[50%] mx-[3%]'>

                        <div className='flex justify-between pb-[1%] items-center my-auto'><label htmlFor="">Technical skills : </label><input type="text" placeholder="Write your tech Skills, use comma to separate" className="input input-bordered w-full max-w-xs" /></div>
                        <div className='flex justify-between pb-[1%] items-center my-auto'><label htmlFor="">Soft skills : </label><input type="text" placeholder="Write your soft skills, use comma to separate" className="input input-bordered w-full max-w-xs" /></div>
                        <div className='flex justify-between pb-[1%] items-center my-auto'><label htmlFor="">Certifications : </label><input type="text" placeholder="Certificate details, use comma to separate" className="input input-bordered w-full max-w-xs" /></div>
                    

                    </div>


                </div>

            </div>
            <div className='my-auto items-center p-[2%]'>
                            <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="font-bold">Upload CV <span className='text-[red]'>*</span></span>
                            </div>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </label>
                </div>  

                <div className="card-actions justify-end border-t-[2px] pt-[1%]">
      <button className="btn font-bold text-white bg-[#014aaa] hover:bg-[#4886b5] w-[8vw] text-lg">Submit</button>
    </div>
                </form>
        </div>
    
    </div>
  );
};

export default ApplyForm;
