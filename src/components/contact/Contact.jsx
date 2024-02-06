import React from "react";
import TextInput from "../wrappers/textInput";

const Contact = () => {


  const inputLabels = ["Phone Number", "Email"];
  const NameLabels = ["First Name", "Last Name"];

   // Lift side Address Details Area
  const contactInfo = [
    {
      title: 'Office Address',
      details: ['Rajibpur Road,Gangapur,Duttapukur-I,','Duttapukuar- 743248,West Bengal,India'],
    },
    {
      title: 'Mobile Number',
      details: ['☏ +91 9051959195', '☏ +91 9674183723', '☏ 033-2500 5025'], 
    },
    {
      title: 'Email',
      details: [
        <a key="email2" href="mailto:info@thnitsolutions.com" style={{ textDecoration: "none" }}>✉ info@thnitsolutions.com</a>,
      ],
    },
    {
      title: 'Map',
      details: [
        'Click on the Google Map',
        <a key="map" href="https://www.google.com/maps/place/TSNT+SOLUTIONS+PVT.+LTD.+Works/@22.7820465,88.5362415,18.5z/data=!4m6!3m5!1s0x39f8a3f11aafced1:0xf7931e3ad99b5d5b!8m2!3d22.7821151!4d88.5369854!16s%2Fg%2F11t7dp5_fy?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer" style={{ textDecoration: "none", color: "blue", fontSize: "40px" }}>
              <img src="/google-maps.svg" alt="" className=" h-12 w-12 mt-2"/>
        </a>,
      ],
    },
  ];

  return (
    <div className="contact justify-center items-center flex my-16">
      <div className="flex rounded-[2vh] shadow-lg border-t-[1px] ">
        <div className="rounded-l-[2vh] py-[2vh] px-[2vw]" style={{backgroundColor:"#8db8fc"}}>
          <h2 className="font-bold mt-2 text-2xl">Reach Us</h2>

          <Contactaddress contacts={contactInfo} />
          
        </div>

        <div className="rounded-[2vh] p-4 bg-white">
          <h2 className="font-bold text-2xl pl-4 ">Drop Your Message</h2>
          <div className="flex mt-4">
            {NameLabels.map((Name) => (
              <TextInput>{Name}</TextInput>
            ))}
          </div>
          <div>
            {inputLabels.map((label) => (
              <TextInput>{label}</TextInput>
            ))}
            <label className="form-control" style={{ margin: "0 1vw" }}>
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Your Message"
              ></textarea>
            </label>
          </div>

          <button className="bg-black hover:bg-gray-800 btn text-white font-bold px-6 drop-shadow-sm  rounded items-center justify-center ml-4 my-8">
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
