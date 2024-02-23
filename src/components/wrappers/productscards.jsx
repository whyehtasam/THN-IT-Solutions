import { Link } from "react-router-dom";
import {useState} from 'react'
import image from "../../assets/SEG-Protection-relay/MCA4/MCA4_right_RGB_300dpi LOW_1920x1920.png";


const TruncatedParagraph = ({ text, maxWords }) => {
    const [showMore, setShowMore] = useState(false);
  
    const words = text.split(' ');
    const truncatedText = showMore ? text : words.slice(0, maxWords).join(' ');
  
    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  
    return (
      <div>
        <p className="text-sm">{truncatedText}
        {words.length > maxWords && (
          <button onClick={toggleShowMore} className="text-blue-500">
            {showMore ? 'See Less' : ' ...See More'}
          </button>
        )}</p>
      </div>
    );
  };
  

const ProductCard=()=>{

    const longText = 'The MCA4 is a precise and reliable protection, control and monitoring relay for feeder, grid and generator applications. It incorporates all the ANSI and IEC concepts to comply with ever changing grid interconnection requirements.'

    return(

        <>
        <div className=" bg-white rounded-lg border-[1px] shadow-sm w-72 p-4 h-auto hover:shadow-xl">
            <div className="">
                <img src={image} alt="" className="h-44 mx-auto items-center flex"/>
            </div>
            <div className="">
                <h3 className="text-blue-900 text-left font-bold text-xl">MCA4 Directional Feeder Protection (MCA4-2D0BLA)</h3>
                <TruncatedParagraph text={longText} maxWords={10} />
            </div>
            <div className="mx-auto items-center w-[90%] bg-blue-700 flex text-white text-center">
                <a className=""><Link>See More ⪼</Link></a>
            </div>
        </div>
        
        </>

    )
}

export default ProductCard;