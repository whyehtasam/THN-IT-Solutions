

const ProfileCards = ({TeamData}) => {
  return (
    <>
    {TeamData.map((data, index) =>(
      <div className="sm:mx-auto sm:max-w-96 card card-compact bg-base-100 shadow-lg border rounded-md md:rounded-lg" key={index}>
        <div className="avatar md:px-10 md:py-6 border-b-[1px] hidden sm:block ">
          <div className="md:w-full w-60 mx-auto rounded-full ring ring-[#397284] ring-offset-base-100 ring-offset-2 my-[2vh] ">
            <img src={data.ImageUrl}  className=""/>
          </div>
        </div>

        <div className="card-body">
          <div className="flex justify-between items-center my-auto">
            <h2 className="card-title">{data.Name}</h2>
            <div className="text-center text-xs font-semibold">
              <p className="text-[#0d51aa] text-base">{data.YearOfExp}</p>
              <p>Year of Exp.</p>
            </div>
          </div>

          <p>{data.Designation}</p>
          <div className="badge badge-outline">Skills</div>
          <p className="md:text-sm text-xs">{data.skills}</p>
        </div>
      </div>))}
    </>
  );
};

export default ProfileCards;
