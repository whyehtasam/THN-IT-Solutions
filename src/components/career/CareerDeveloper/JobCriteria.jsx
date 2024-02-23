const Criteria = ({ prop }) => {
  return (
    <>
      {prop.map((data, index) => (
        <div key={index} className="gap-2 p-5 md:py-6 md:px-8 border-b-[1px]">
          <h1 className="py-2 font-bold text-slate-500">
            {data.Title} {":"}
          </h1>

          <div className="md:pl-4">
            <ul className="pl-5 list-disc list-outside">
              {data.Points.map((point, pointIndex) => (
                <li key={pointIndex} className="p-1 text-xs text-justify md:text-sm text-slate-800">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Criteria;
