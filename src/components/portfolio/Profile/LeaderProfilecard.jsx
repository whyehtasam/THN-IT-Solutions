const LeaderProfileCard = ({ leadermsgData }, index) => {
  return (
    <>
      {leadermsgData.map((data, index) => (
        <div class="mx-auto flex rounded-2xl bg-base-100 drop-shadow-lg border-[1px]">
          <div className="flex gap-[2%]">
            <figure className="w-[40%]" key={index}>
              <div className="rounded-2xl bg-base-100 ">
                <img
                  src={data.img}
                  alt="CEO"
                  className="h-[40vh] w-full rounded-t-2xl"
                />
                <div className="px-[2vw] py-[2vh]">
                  <h2 className="card-title">{data.Name}</h2>
                  <p>{data.Designation}</p>
                </div>
              </div>
            </figure>
            <div class=" w-[60%]">
              <h2 class="font-semibold py-[2vh]">{data.MessageTitle}</h2>
              {data.MsgPara.map((msg, msgIndex) => (
                <p className="text-sm px-2 py-1" key={msgIndex}>
                  {msg}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeaderProfileCard;
