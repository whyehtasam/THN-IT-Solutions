
import { Link } from 'react-router-dom';
const GetInTouch = ({ para,className }) => {
 

  return (
    <div className={"p-10 mb-16 grid  mx-auto rounded-lg bg-white shadow-lg " + className}>
      <h1 className="text-4xl text-start font-semibold">Get in touch</h1>
      <div className="h-[0.5px] bg-opacity-30 my-2 bg-black w-10/12 "></div>
      <p className="text-sm text-justify font-medium leading-loose text-gray-500">
        {para}
      </p>
      <Link to='/contact'>
      <button className="btn w-fit text-sm font-medium rounded tracking-wider border z-10 bg-black text-white hover:bg-gray-800 hover:font-semibold mt-4">Contact Us</button>
      </Link>
      
    </div>
  );
};

export default GetInTouch;