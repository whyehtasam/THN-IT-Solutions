

const ProfileCards = ({TeamData}, index) => {
  return (
    <>
    {TeamData.map((data, index) =>(
      <div className="card card-compact bg-base-100 drop-shadow-lg">
        <div className="avatar px-[1vw] border-b-[1px] ">
          <div className="w-full rounded-full ring ring-[#397284] ring-offset-base-100 ring-offset-2 my-[2vh] ">
            <img src={data.ImageUrl} />
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
          <p>{data.skills}</p>
        </div>
      </div>))}
    </>
  );
};

export default ProfileCards;
