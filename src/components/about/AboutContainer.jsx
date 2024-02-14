const AboutContainer = ({ data, style, imgStyle, contentStyle,descStyle }) => {
  const { id, title, description, path } = data;
  return (
    <section
      className={
        "about-container  lg:mb-16 min-w-60  p-8 lg:flex  lg:items-stretch mx-auto justify-between " +
        style
      }
    >
      <div className={"img flex justify-center items-center " + imgStyle}>
        <img
          src={path}
          alt="svg"
          className=" lg:drop-shadow-md  lg:p-0 w-full lg:max-w-3xl"
        />
      </div>
      <div
        className={"info flex  flex-col   " + contentStyle}
      >
        <h1 className="text-2xl font-bold leading-normal lg:text-4xl  md:mt-10">
          {title}
        </h1>
        <p className={"pt-5 mb-5 text-xs font-medium leading-loose text-justify text-gray-500  lg:pt-10 sm:mb-0 lg:text-sm " + descStyle}>
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

export default AboutContainer;
