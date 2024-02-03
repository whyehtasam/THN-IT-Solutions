import React from 'react'
import TextInput from '../wrappers/textInput';


const Contact = () => {
  const inputLabels = ['Phone Number', 'Email'];
  const NameLabels = ['First Name', 'Last Name'];

  return (
    <div className='contact justify-center items-center flex my-16'>

      <div className='flex rounded-[2vh] shadow-lg '>

      
    <div className='bg-slate-50 rounded-[2vh] py-[2vh] px-[2vw]' >
      <h2 className='font-bold mt-2 text-2xl'>Reach Us</h2>

                <div className='mt-[3vh]'>
                    <h3 style={{marginTop:"3vh"}}>Corporate Address</h3>
                    <p >Uttrayan Apartment,Ground Floor,<br/> RC No. 16/3 , Raghunathpur, Kolkata – 700059</p>
                </div>

                <div className='contactus-div mt-[3vh]'>
                    <h3 >Mobile Number</h3>
                    <p >☏ +91 9674 183 723</p>
                    <p >☏ +91 9674 183 723</p>
                </div>

                <div className='contactus-div' style={{marginTop:"3vh"}}>
                    <h3  style={{marginTop:"3vh"}}>Email</h3>
                    <p ><a href="mailto:info@tsntsolutions.com" style={{textDecoration: "none"}}>✉ info@tsntsolutions.com</a></p>
                   <p ><a href="mailto:nazrul@tsntsolutions.com" style={{textDecoration: "none"}}>✉ nazrul@tsntsolutions.com</a></p>
                </div>


                <div className='contactus-div mt-[3vh]'>
                    <h3  style={{marginTop:"3vh"}}>Map</h3>
                  <p >Click on the Google Map </p>
                  <a href="https://maps.app.goo.gl/Bg24oyCyiZZCgraNA"
                    target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color:"blue", fontSize:"40px"}}>🗺️</a>
                </div>
          </div>


          <div className='rounded-[2vh] p-4'>
            <h2 className='font-bold text-2xl my-2'>Drop Your Message</h2>
            <div className='flex mt-4'>
              {
                NameLabels.map((Name) =>(
                  <TextInput>{Name}</TextInput>

                ))

              }
            </div>
            <div>
            {inputLabels.map((label) => (
                  <TextInput>{label}</TextInput>
                ))}
                <label className="form-control" style={{margin:"0 1vw"}}>
        <div className="label">
          <span className="label-text">Message</span>
        </div>
        <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
        </label>
            </div>
              
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center justify-center m-8'>Submit</button>
    </div>
    </div>    
    </div>
  );
};

export default Contact;