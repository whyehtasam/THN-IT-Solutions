import userimage from "./images/userImage.jpg";

const TechnicalExpartCard = ({TechnicalExpartData}) => {
  return (
    <>
    {TechnicalExpartData.map((data, index) => (
    <div className="card card-side bg-base-100 shadow-lg border" key={index}>
      
      
      <div className="flex card-body">
      <div className="flex justify-between items-center my-auto py-2">
            <h2 className="card-title">{data.Name}</h2>
            <div className="text-center text-xs font-semibold">
              <p className="text-[#0d51aa] text-base">{data.YearOfExp}</p>
              <p>Year of Exp.</p>
            </div>
          </div>

          <p>{data.Designation}</p>
      <h2 className="">Domain Experience</h2>
        <span className=" text-xs font-semibold">{data.expdetials}</span>
           <h2 className="card-title">Skills</h2>
           {data.skils.map((skill, skillsindex) => (
        <li key={skillsindex} className=" text-xs">{skill}</li>
      ))}
      </div>
    </div>
    ))}
    </>
  );
};

export default TechnicalExpartCard;
