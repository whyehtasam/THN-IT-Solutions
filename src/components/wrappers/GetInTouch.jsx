
import { Link } from 'react-router-dom';
const GetInTouch = ({ para,className }) => {
 

  return (
    <div className={"lg:p-10 lg:mb-12 grid  lg:mx-auto lg:rounded-lg bg-white shadow-lg " + className}>
      <h1 className="md:text-4xl text-2xl font-semibold text-start">Get in touch</h1>
      <div className="h-[0.5px] bg-opacity-30 my-2 bg-black w-10/12 "></div>
      <p className="mx-auto lg:mt-1 text-xs md:text-base font-medium leading-loose text-justify text-gray-500 w-fit">
        {para}
      </p>
      <Link to='/contact'>
      <button className="z-10 mt-4 text-xs lg:text-sm font-medium lg:tracking-wider text-white bg-black border rounded btn w-fit hover:bg-gray-800 hover:font-semibold">Contact Us</button>
      </Link>
      
    </div>
  );
};

export default GetInTouch;