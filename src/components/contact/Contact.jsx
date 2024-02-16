import React from "react";
import LeftSideContact from "./LeftContactArea";
import InputData from "./InputData";

const Contact = () => {
  return (
    <div className="flex items-center justify-center m-4 md:my-8 contact">
      <div className="flex md:flex-row flex-col-reverse rounded-lg shadow-lg border-t-[1px] p-3 md:p-0">
        <LeftSideContact />

        <div className="bg-white md:rounded-lg md:py-8 md:px-4">
          <h2 className="pl-2 text-2xl font-bold ">Drop Your Message</h2>
          <InputData />
        </div>
      </div>
    </div>
  );
};

export default Contact;
