import userimage from "./images/userImage.jpg";

const TechnicalExpartCard = ({TechnicalExpartData}) => {
  return (
    <>
    {TechnicalExpartData.map((data, index) => (
    <div className="card card-side bg-base-100 shadow-xl" key={index}>
      <div className="card card-compact bg-base-100 border-r-[1px] w-[20vw]">
        <div className="avatar px-[1vw] border-b-[1px] bg-[#98c2ef] card">
          <div className="w-full rounded-full ring ring-[#397284] ring-offset-base-100 ring-offset-2 my-[2vh] ">
            <img src={userimage} />
          </div>
        </div>

        <div className="card-body">
          <div className="flex justify-between items-center my-auto py-2">
            <h2 className="card-title">{data.Name}</h2>
            <div className="text-center text-xs font-semibold">
              <p className="text-[#0d51aa] text-base">{data.YearOfExp}</p>
              <p>Year of Exp.</p>
            </div>
          </div>

          <p>{data.Designation}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      
      <div className="flex card-body">
      <h2 className="card-title">Domain Experience</h2>
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
