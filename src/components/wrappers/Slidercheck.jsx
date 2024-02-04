
import ImageSlides from "./ImageSlides"

function SliderCheck() 
{

    //const [imageNum, setImageNum] = useState(1);
    const Images= [

      "../src/assets/image1.jpg",
      "../src/assets/image2.jpg",
      "../src/assets/image3.jpg",
      "../src/assets/image4.jpg",
      
    ];

   
   return (
      <div className="container">
    <div className="overlay" style={{height:"50%", width:"50%"}}>
    <ImageSlides
            images={Images}
         >
          {/* Any text to show inside the slider  area do not put buttons  here cause it is on middle layer*/}
          <div className="content">
            <div id="text">
              <h2 className="h2">Welcome to</h2>
              <h1 className="h1">THN IT Solutions</h1>
              <p style={{fontSize:"20px", paddingBottom:"4vh"}}>We provide Creative Solutions</p>
            </div>
          </div>
          </ImageSlides>
    </div>
  </div>
         
   );
}

export default SliderCheck;