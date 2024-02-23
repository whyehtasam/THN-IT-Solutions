import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Container from "../wrappers/Container";
const TechnologiesTab = (props) => {
  // const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="p-4 md:px-8 technologies ">
      <Container className="flex flex-col mx-auto md:flex-row md:bg-white md:border md:rounded-xl lg:max-w-full lg:p-0 lg:m-0 tabs-service drop-shadow-sm">
        <div className="h-full px-1 shadow-none md:basis-2/3 tab-cards">
          <div
            className=" card h-auto w-full bg-base-100  hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300  shadow rounded-md"
            key={""}
          >
            <div className="p-4 card-body md:p-6 ">
              <h2 className="text-xl md:text-2xl card-title">
                🚀 Welcome to THN IT Solutions
              </h2>
              <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                We harness the power of cutting-edge software technologies to
                provide innovative solutions tailored to your needs. Our
                approach integrates scientific knowledge, engineering
                principles, and computer science techniques to create, develop,
                maintain, and support robust software systems and applications.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                🎯 Our Expertise
              </h2>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                At THN IT Solutions, we specialize in a diverse array of
                technologies, ensuring a comprehensive suite of solutions to
                meet your unique requirements. Our proficiency spans various
                programming languages, including Python, Java, and C++, as well
                as front-end technologies like HTML, CSS, JavaScript, ReactJS,
                React Native, AngularJS, and NextJS.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                🔙 Back-end Excellence
              </h2>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                Experience the efficiency and reliability of our back-end
                solutions, crafted with technologies such as Node.js, Django,
                Spring Boot, PHP, and more. We leverage the strengths of these
                frameworks to build scalable and high-performance systems.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                🗃️ Database Mastery
              </h2>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                Our expertise extends to various databases, including Oracle,
                MySQL, PostgreSQL, MongoDB, and others. Whether you require
                structured, unstructured, or NoSQL databases, we have the
                knowledge and experience to optimize data management for your
                business needs.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                ☁️ Cloud Technologies
              </h2>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                Embrace the flexibility and scalability of cloud computing with
                our proficiency in different cloud technologies. We can guide
                you through the integration and utilization of cloud services to
                enhance your software solutions.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                🔄 Agile and DevOps
              </h2>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                Efficiency and collaboration are at the core of our software
                development methodologies. We employ Agile and DevOps practices
                to streamline the development lifecycle, ensuring faster
                releases, continuous improvement, and seamless collaboration.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                🔧 Frameworks that Drive Innovation
              </h2>
              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                Explore the capabilities of frameworks like React, Django, and
                TensorFlow, which empower us to deliver solutions that are not
                just functional but also innovative and future-ready.
              </p>

              <h2 className="text-lg md:text-xl card-title">
                🎁 Why Choose THN IT Solutions
              </h2>
              <ul className="pl-6 text-xs text-justify text-gray-800 list-disc list-inside md:pl-0 lg:text-sm">
                <li>Automation of Processes</li>
                <li>Enhanced Productivity</li>
                <li>Improved Efficiency</li>
                <li>Data Analysis Capabilities</li>
                <li>Innovation Across Industries</li>
              </ul>

              <p className="text-xs text-justify text-gray-800 lg:text-sm">
                Discover the potential of software technology with THN IT
                Solutions. We are committed to bringing automation,
                productivity, efficiency, and innovation to your business
                through the latest advancements in the world of technology.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky mx-1 mt-4 rounded cursor-pointer md:flex-1 md:pl-9 tab-contents md:w-max md:m-0">
          {props.dataR.map((item, index) => (
            <div
              className="mb-5 bg-white border rounded-md collapse collapse-arrow "
              key={index}
            >
              <input type="checkbox" className="peer" />
              <div className="font-semibold cursor-pointer md:text-lg collapse-title peer-checked:bg-gray-800 peer-checked:text-white">
                {item.title}
              </div>
              <div className="transition-all collapse-content peer-checked:bg-gray-800 peer-checked:text-white">
                <p className="text-xs md:text-sm text-justify">{item.description}</p>
                {/* <button className="pl-0 text-white md:no-underline underline btn btn-link w-max ">
                  <Link to={`${""}`}>
                    Explore{" "}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="ml-1 text-xs"
                    />
                  </Link>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologiesTab;
