import React, {useState} from "react";
import {contactInfo} from "./addressField"

const Contact = () => {

  const [isMapVisible, setIsMapVisible] =useState(false);
  const [isMapIcon, setIsMapIcon]=  useState(true);

  const VisibleEmbed=()=>{
    setIsMapIcon(false);
    setIsMapVisible(true);
  }
  const VisibleIcon=()=>{
    setIsMapIcon(true);
    setIsMapVisible(false);
  }

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // handle success, e.g., 
        alert("Your message has been sent!"); //show a success message
      } else {
        console.error('Failed to submit form');
        alert("Your message has failed!");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }


  return (
    <div className="contact justify-center items-center flex mt-4 mb-16">
      <div className="flex rounded-[2vh] shadow-lg border-t-[1px] ">
        <div className="rounded-l-[2vh]" style={{backgroundColor:"#8db8fc"}}>
          <h2 className="font-bold mt-8 mx-8 text-2xl">Reach Us</h2>

          <div className="py-[2vh] px-[2vw]">
          <Contactaddress contacts={contactInfo} />
          </div>
           
           <div className="py-[2vh] px-[2vw] ">
           <h3 className='font-bold mt-2'>Map</h3>
           <p className=" w-[100%] rounded mt-2">Click the Map</p>
           
           {isMapIcon && <img src="google-maps.svg" alt="" className="h-12 w-12 rounded mt-2 hover:cursor-pointer" onClick={VisibleEmbed}/>} 
           {isMapVisible && <><p className="text-4xl pt-4 hover:cursor-pointer" onClick={VisibleIcon}>⤫</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1839.2753912998028!2d88.5362415!3d22.7820465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3f11aafced1%3A0xf7931e3ad99b5d5b!2sTSNT%20SOLUTIONS%20PVT.%20LTD.%20Works!5e0!3m2!1sen!2sin!4v1707376110558!5m2!1sen!2sin" 
            className=" w-[100%] rounded mt-4" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></>}
           </div>
          
        </div>

        <div className="rounded-[2vh] p-4 bg-white">
          <h2 className="font-bold text-2xl pl-4 ">Drop Your Message</h2>
          <div className="flex mt-4">
            <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">First Name</span>
            </div>
            <input type="text" 
            placeholder={"Enter First Name"} 
            className="input input-bordered w-full max-w-xs" 
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required/>
            </label>

            <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">Last Name</span>
            </div>
            <input type="text" 
            placeholder={"Enter Last Name"} 
            className="input input-bordered w-full max-w-xs" 
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required/>
            </label>


          </div>
          <div>
          <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">Phone Number</span>
            </div>
            <input type="text" 
            placeholder={"eg.: +91 1234567890"} 
              id="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            className="input input-bordered w-full max-w-xs" 
            required/>
            </label>
            <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input type="email" 
              placeholder={"eg.: jhon@gmail.com"} 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full max-w-xs" 
              required/>
            </label>
            <label className="form-control" style={{ margin: "0 1vw" }}>
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" required
              ></textarea>
            </label>
          </div>

          <button className="bg-black hover:bg-gray-800 btn text-white font-bold px-6 drop-shadow-sm  rounded items-center justify-center ml-4 my-8"
          onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};


const Contactaddress = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index} style={{ marginTop: "3vh" }}>
          <h3 style={{ marginTop: "3vh" }} className='font-bold'>{contact.title}</h3>
          {contact.details.map((detail, detailIndex) => (
            <p key={detailIndex}>{detail}</p>
          ))}
        </div>
      ))}
    </div>
  );
};



export default Contact;
