const AboutContainer = ({ data, style }) => {
  const { id, title, description, path } = data;
  return (
    <section
      className={
        "about-container  lg:mb-16 min-w-60 lg:max-w-6xl p-8 lg:flex  lg:items-stretch mx-auto justify-evenly " +
        style
      }
    >
      <div className="img flex justify-center items-center   flex-1 ">
        <img src={path} alt="svg" className="lg:h-[22rem] lg:drop-shadow-md w-11/12 lg:p-0 p-5" />
      </div>
      <div className="info flex  flex-col   lg:px-16 lg:w-[700px]">
        <h1 className="lg:text-3xl text-2xl font-bold drop-shadow leading-normal mt-10">
          {title}
        </h1>
        <p className=" lg:pt-10 pt-5  text-xs lg:text-sm text-justify font-medium leading-loose text-gray-500">
        {description.split('\n').map((line, i) => (
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

export default AboutContainer;
