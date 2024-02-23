import { Link } from "react-router-dom";
import { careerCardData } from "./cardsCareer";
import svg from "../../assets/WeAreHiring.svg";
function Career() {
  return (
    <section className="mx-auto career-page md:mb-8 about-us lg:max-w-7xl">
      <div className="flex flex-col-reverse md:grid md:mb-8 md:grid-cols-2 md:pt-0">
        <div className="flex-1 h-full p-5 lg:p-16 ">
          <div className="">
            <h2 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Shape Your Future with THN IT Solutions ?{" "}
            </h2>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Are you passionate about software development and eager to
              contribute to cutting-edge technology solutions? THN IT Solutions
              is looking for talented individuals to join our dynamic team!
            </p>
            <p className="text-justify text-sm lg:text-base">
              At THN IT Solutions, we are at the forefront of innovation,
              crafting cutting-edge software solutions that empower businesses
              and individuals alike. Our commitment to excellence, coupled with
              a passion for technology, drives us to create software that makes
              a meaningful impact. As we continue to expand our team, we are
              seeking talented and motivated individuals to join us on our
              journey.
            </p>
          </div>
          <div className="py-4 md:py-8">
            <h3 className="pb-4 text-lg font-bold">
              Why Join THN IT Solutions
            </h3>
            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Exciting and challenging projects that push the boundaries of
                technology.
              </li>
              <li className="text-sm">
                Competitive salary and benefits package.
              </li>
              <li className="text-sm">
                Opportunities for professional development and growth.
              </li>
              <li className="text-sm">
                A collaborative and inclusive work culture that values
                innovation.
              </li>
            </ul>
          </div>
        </div>
        <div className="justify-center flex-1 w-full md:p-16">
          <img
            src={svg}
            alt="svg image"
            className="mx-auto md:h-full h-80 mix-blend-multiply"
          />
        </div>
      </div>
      <h2 className="p-4 mx-5 mb-4 text-2xl font-bold text-center text-gray-800 bg-white border-2 rounded-lg shadow-sm md:p-10 md:mx-0 md:text-2xl lg:text-3xl md:rounded-box md:hidden">
        Current Openings
      </h2>
      <div className="grid gap-5 px-5 mb-8 lg:p-0 md:grid-cols-2 lg:grid-cols-3 ">
        <Careercard cData={careerCardData} />
      </div>
    </section>
  );
}

const Careercard = ({ cData }) => {
  return (
    <>
      {cData.map((data, index) => (
        <div
          className="card bg-base-100  shadow-sm md:shadow-xl border-[2px] md:rounded-box rounded-lg "
          key={index}
        >
          <div className="card-body">
            <h2 className="text-xl font-bold md:text-2xl card-title">
              <img src={data.url} alt="" height={"50vh"} width={"50vw"} />{" "}
              {data.name}
            </h2>
            <p className="pt-2 pl-2 text-xs text-justify md:pt-4 md:text-sm">
              {data.description}
            </p>
            <div className="flex mt-4 card-actions ">
              <Link to={data.path}>
                <a className="px-4 py-2 ml-2 text-xs text-white no-underline bg-gray-800 rounded-full md:text-base hover:bg-gray-700 hover:shadow">
                  Explore »
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Career;
