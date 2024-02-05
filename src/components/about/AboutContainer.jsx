const AboutContainer = ({ data }) => {
  const { id, title, description, path } = data;
  return (
    <section className="about-container mb-16 min-w-96 lg:max-w-6xl lg:flex  items-stretch mx-auto justify-evenly">
        <div className="img flex justify-center items-center   flex-1 ">
        <img src={path} alt="svg"  className="h-96 drop-shadow-md"/>
      </div>
      <div className="info flex  flex-col i flex-1 md:py-12 px-20">
        <h1 className="text-3xl  font-bold drop-shadow leading-normal mt-10">
          {title}
        </h1>
        <p className=" pt-10  text-sm text-justify font-medium leading-loose text-gray-500 w-[p] ">
          {description}
        </p>
      </div>
      
    </section>
  );
};

export default AboutContainer;
