import { IntroServiceCardData } from "../ourService/ourServiceData";
// import TabServices from "../ourService/TabServices";
import TechnologiesTab from "./TechnologiesTab";

const Technology = () => {

    const dataR = [
        {
            title: "🖥️ Frontend Development",
            description: "Building interactive and responsive user interfaces using technologies like HTML, CSS, JavaScript, ReactJs, React Native, AngularJs, NextJs etc."
          },
          {
            title: "🔙 Backend Development",
            description: "Creating server-side logic, working with databases, and ensuring high performance and responsiveness to requests from the frontend using technologies like Node.Js, Django, Spring boot, PHP etc."
          },
          {
            title: "🗃️ Database",
            description: "Designing, implementing, and managing databases to store, retrieve, and manipulate data using technologies like Oracle, MySQL, PostgreSQL, MongoDB etc."
          },
          {
            title: "☁️ Cloud",
            description: "Leveraging cloud platforms to build, deploy, and scale applications, and to provide data storage and other services."
          },
          {
            title: "🧠 Artificial Intelligence",
            description: "Developing systems or applications that mimic human intelligence to perform tasks such as image recognition, speech recognition, or decision-making using frameworks like TensorFlow."
          },
          {
            title: "🏗️ Infrastructure Development",
            description: "Building and managing the foundational technology components that support a business's IT services."
          },
          {
            title: "🔄 DevOps",
            description: "Practicing agile methodologies to unify software development and software operation for faster and efficient delivery."
          }
      ];

    
  return (
    <section className="mx-auto mt-16 about-us lg:max-w-7xl">
      <h1 className="text-5xl font-bold text-center ">
        Explore our Technologies
      </h1>
      <TechnologiesTab data={IntroServiceCardData} dataR={dataR} />
    </section>
  );
};

export default Technology;
