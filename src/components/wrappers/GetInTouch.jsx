
import { Link } from 'react-router-dom';
const GetInTouch = ({ para,className }) => {
 

  return (
    <div className={"p-10 mb-16 grid  mx-auto rounded-lg bg-white shadow-lg " + className}>
      <h1 className="text-4xl font-semibold text-start">Get in touch</h1>
      <div className="h-[0.5px] bg-opacity-30 my-2 bg-black w-10/12 "></div>
      <p className="text-sm font-medium leading-loose text-justify text-gray-500">
        {para}
      </p>
      <Link to='/contact'>
      <button className="z-10 mt-4 text-sm font-medium tracking-wider text-white bg-black border rounded btn w-fit hover:bg-gray-800 hover:font-semibold">Contact Us</button>
      </Link>
      
    </div>
  );
};

export default GetInTouch;