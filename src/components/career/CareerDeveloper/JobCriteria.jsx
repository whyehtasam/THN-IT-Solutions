const Criteria=({prop})=>
{

    return(
        <>
        {prop.map((data, index) => (
          <div key={index} className="gap-2 py-6 px-8 border-b-[1px]">
            <h1 className="text-slate-500 font-bold py-2">
              {data.Title} {':'}
            </h1>
  
            <div className="pl-4">
              
                {data.Points.map((point, pointIndex) => (
                  <li key={pointIndex} className='text-slate-800 text-sm p-1'>{point}</li>
                ))}
            </div>
          </div>
        ))}
      </>
    )
}

export default Criteria;