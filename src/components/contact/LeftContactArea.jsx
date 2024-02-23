import React, { useState } from "react";

function LeftSideContact()
{

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
];

return(

  <>
  <div className="p-4 md:p-0 rounded-lg md:rounded-l-lg md bg-slate-200 md:text-gray-800" >
          <h2 className=" md:mx-8 md:mt-8 text-2xl font-bold">Reach Us</h2>

          <div className="md:py-[2vh] md:px-[2vw]">
          <Contactaddress contacts={contactInfo} />
          </div>
           
           <div className="md:py-[2vh] md:px-[2vw] ">
           <h3 className='mt-2 font-bold'>Map</h3>
           <p className=" w-[100%] rounded mt-2">Click the Map</p>
           
           {isMapIcon && <img src="google-maps.svg" alt="" className="w-12 h-12 mt-2 rounded-lg shadow-sm  hover:cursor-pointer" onClick={VisibleEmbed}/>} 
           {isMapVisible && <><p className=" text-4xl hover:cursor-pointer flex justify-end opacity-75" onClick={VisibleIcon}>⤫</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1839.2753912998028!2d88.5362415!3d22.7820465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a3f11aafced1%3A0xf7931e3ad99b5d5b!2sTSNT%20SOLUTIONS%20PVT.%20LTD.%20Works!5e0!3m2!1sen!2sin!4v1707376110558!5m2!1sen!2sin" 
            className=" w-full  rounded-md drop-shadow-md my-4" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></>}
           </div>
          
        </div>
  </>
)

}










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


export default LeftSideContact;