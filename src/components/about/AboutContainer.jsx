const AboutContainer = ({ id, title, description, path }) => {
  return (
    <section className="about-container min-w-96 lg:w-full flex lg:grid md:grid-cols-2 md:gap-6">
      <div className="info lg:flex flex-col">
        <h1 className="text-3xl  h-fit font-bold drop-shadow leading-normal">
          {title}
        </h1>
        <p className=" pt-10  text-sm text-justify font-medium leading-loose text-gray-500 ">
          {description}
        </p>
      </div>
      <div className="img">
        <img src={path} alt="svg" />
      </div>
    </section>
  );
};

export default AboutContainer;
