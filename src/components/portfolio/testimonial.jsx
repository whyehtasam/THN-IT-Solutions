import React from 'react';

const testimonialData = [
  {
    imgSrc: "/icin.png",
    name: "Firoz Ahmed",
    company: "Altarnative Power Solutions",
    position: "Director",
    testimonial: "From start to finish, the THN IT Solutions was dedicated to bringing my vision to life. They were patient with my requests and provided valuable insights along the way. I'm thrilled with the end product!"
  },
  {
    imgSrc: "/icin.png",
    name: "Tarun Adhikari",
    company: "TSN Technosolutions",
    position: "Director",
    testimonial: "We could not be happier with the results. The website not only looks great but also functions seamlessly. The THN IT Solutions went above and beyond to ensure everything was perfect. Thank You!!"
  },
  {
    imgSrc: "/icin.png",
    name: "Abhijit Banerjee",
    company: "TSN Automation",
    position: "CEO",
    testimonial: "Working with the THN IT Solutions was a breeze. They were responsive, creative, and professional throughout the entire process. My website looks fantastic, and I have already received compliments."
  },
  {
    imgSrc: "/icin.png",
    name: "Pintu Choudhury",
    company: "TSNT Solutions",
    position: "CEO",
    testimonial: "We are extremely pleased with the outcome of my website. THN IT Solutions delivered exactly what I envisioned, and the attention to detail is impeccable. Highly recommend their services!"
  }
];

function Testimonial() {
  return (
    <div className="flex gap-4  bg-white">
      {testimonialData.map((testimonial, index) => (
        <div key={index} className="shadow-xl border-[2px] rounded-lg justify-center p-10 h-50">
          <div className="flex gap-2">
            <img src={testimonial.imgSrc} alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
            <div className="justify-start items-center my-auto">
              <h3 className="text-left text-sm font-semibold">{testimonial.name}</h3>
              <p className="text-xs">{testimonial.company}</p>
              <p className="text-xs">{testimonial.position}</p>
            </div>
          </div>
          <p className="text-sm text-justify font-medium text-gray-500">{testimonial.testimonial}</p>
          <div className="rating py-2 justify-center"></div>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;