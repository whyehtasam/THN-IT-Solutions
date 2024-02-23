const LeaderProfileCard = ({ leadermsgData,style}) => {
  return (
    <div className={"md:grid gap-5 flex flex-col" + style}>
      {leadermsgData.map((data, index) => (
        // <div className=" gap-5 drop-shadow border-1 md:h-72" key={index}>
          <div className="flex flex-col  md:flex-row h-full bg-white rounded-2xl p-5 gap-5 md:h-72 shadow-lg " key={index}>
            <div className=" bg-base-100 aspect-square h-full  flex justify-center items-center ">
              <img
                src={data.img}
                alt="CEO"
                className="object-cover  h-full rounded-2xl aspect-square"
              />
            </div>

            <div className="  grid place-content-between   md:pl-0">
              <div className="">
                <h2 className=" text-lg font-semibold py-[2vh]">
                  {data.MessageTitle}
                </h2>
                {data.MsgPara.map((msg, msgIndex) => (
                  <p className="py-1 text-sm text-justify " key={msgIndex}>
                    {msg}
                  </p>
                ))}
              </div>
              <div className="p-2 pl-0">
                <h2 className="text-lg font-semibold">{data.Name}</h2>
                <p className="text-sm font-semibold">{data.Designation}</p>
              </div>
            </div>
          </div>
        // </div>
      ))}
    </div>
  );
};

export default LeaderProfileCard;
