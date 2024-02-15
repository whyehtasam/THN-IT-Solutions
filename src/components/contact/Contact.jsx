import React from "react";
import LeftSideContact from "./LeftContactArea"
import InputData from './InputData'

const Contact = () => {


  

  return (
    <div className="contact justify-center items-center flex mt-4 mb-16">
      <div className="flex rounded-[2vh] shadow-lg border-t-[1px] ">
        
        <LeftSideContact />

        <div className="rounded-[2vh] p-4 bg-white">
          <h2 className="font-bold text-2xl pl-4 ">Drop Your Message</h2>
          <InputData />
        </div>
      </div>
    </div>
  );
};


export default Contact;