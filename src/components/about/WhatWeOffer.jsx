const WhatWeOffer = ({ data, style, imgStyle, contentStyle, imgData }) => {
  const { title, description } = data;
  return (
    <section
      className={
        "about-container  lg:mb-16 min-w-60  md:p-8 lg:flex  lg:items-stretch md:mx-auto justify-between " +
        style
      }
    >
      <div className={"img flex justify-center items-center " + imgStyle}>
        <div className="grid gap-4 md:my-10  lg:grid-cols-4 md:grid-cols-3">
          {imgData.map(({ tech, path }, index) => (
            <div
              className="card card-compact flex-1 bg-base-100 md:border md:shadow-none shadow-sm hover:scale-[1.01] lg:max-h-64 max-h-56 lg:max-w-56 p-0 md:hover:shadow-sm cursor-pointer transition-all duration-200 rounded-md"
              key={index}
            >
              <figure className="h-full">
                <img
                  src={path}
                  alt="What we offer"
                  className="lg:object-cover w-full lg:h-full"
                />
              </figure>
              <div className="flex items-center justify-center tracking-wider text-center card-body">
                <h2 className="card-title text-xs text-gray-800">{tech}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={"info flex  flex-col   " + contentStyle}>
        <h1 className="text-2xl font-bold leading-normal lg:text-4xl md:mt-10">
          {title}
        </h1>
        <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 mt-1 md:hidden"></div>
        <p className="md:pt-5 pt-2 mb-5 text-xs font-medium leading-loose text-justify text-gray-500 lg:pt-6 sm:mb-0 lg:text-sm">
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default WhatWeOffer;
