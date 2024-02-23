import React, { useState } from "react";

function InputData()
{

    
  const [isVisible, setIsVisible] = useState(false);
  const [sentSuccess, setSentSuccess] = useState('');
  const [sentError, setSentError] = useState('');

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: '',
  });
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    setStatusMessage((prevMessage) => ({
      ...prevMessage,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (formData.fname.trim() === '') {
      validationErrors.fname = 'Please enter first name';
    }

    if (formData.lname.trim() === '') {
      validationErrors.lname = 'Please enter last name';
    }

    if (formData.phone.trim() === '') {
      validationErrors.phone = 'Please enter phone number';
    }
    if (formData.email.trim() === '') {
      validationErrors.email = 'Please enter Email';
    }
    if (formData.message.trim() === '') {
      validationErrors.message = 'Please enter your Message';
    }
    // If there are validation errors, set them in the state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } 
    else {


    try {
      const response = await fetch('https://thnitsolutions.in/api/mysqlcontact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setFormData({
          fname: '',
          lname: '',
          phone: '',
          email: '',
          message: '',
        });
        setIsVisible(true);
        setSentSuccess('Message Sent Successfully! Thank you for contacting us.');
        console.log(result); // handle success, e.g., show a success message
      } 
      else {
        console.error('Failed to submit form');
        setIsVisible(true);
        setSentError("Something went wrong while submitting your request.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      console.log(error)
    }
  }
  };


    return(
        <>
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex mt-4">

            <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">First Name</span>
            </div>
              <input type="text" 
              placeholder={"Enter First Name"} 
              className={`input input-md input-bordered w-full max-w-xs ${
            errors.fname ? 'border-red-500' : 'border-gray-300'
          }`} 
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              />
              {errors.fname && (
          <p className="text-red-500 text-xs mt-1">{errors.fname}</p>
        )}

            </label>

            <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">Last Name</span>
            </div>
              <input type="text" 
                placeholder={"Enter Last Name"} 
                className={`input  input-md input-bordered w-full max-w-xs ${
            errors.lname ? 'border-red-500' : 'border-gray-300'
          }`} 
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                />
                {errors.lname && (
          <p className="text-red-500 text-xs mt-1">{errors.lname}</p>
        )}


            </label>


          </div>
          <div>
          <label className="form-control w-full max-w-xs" style={{margin:"0 1vw"}}>
            <div className="label">
                <span className="label-text">Phone Number</span>
            </div>
            <input type="text" 
              placeholder={"eg.: +91 1234567890"} 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`input  input-md input-bordered w-full md:max-w-xs ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`} 
              />
              {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}


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
              className={`input  input-md input-bordered w-full max-w-xs ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`} 
              />
              {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
            </label>
            <label className="form-control" style={{ margin: "0 1vw" }}>
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className={`textarea textarea-bordered h-24 
                ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
              ></textarea>
              {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
            </label>
          </div>

          {isVisible && (
          <div id="Message-Status" className={`mt-2 flex `}>
            <p className={`gap-[1vw] flex items-center mx-auto mt-[2vh]`}> 
            <span className={`${sentSuccess ? 'text-green-500' : 'text-red-500' }`}>{sentSuccess}{sentError}</span>
            <span onClick={() => setIsVisible(false)} className="text-xl">⤫</span></p>
           
          </div>
        )}

        <button
          className="bg-[#3e87db] hover:bg-[#3c6da4] btn text-white font-bold px-6 drop-shadow-sm rounded items-center justify-center ml-4 my-8"
          type="submit"
        >
          Submit
        </button>
      </form>
        </>
    )
}


export default InputData;