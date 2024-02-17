import { Link } from "react-router-dom";
import { careerCardData } from "./cardsCareer";
import svg from "../../assets/WeAreHiring.svg";
function Career() {
  return (
    <section className="mx-auto career-page md:mb-8 about-us lg:max-w-7xl">
      <div className="grid md:my-8 md:grid-cols-2 md:pt-16">
        <div className="flex-1 h-full p-5 lg:pr-16">
          <div className="">
            <h2 className="md:font-bold font-semibold text-xl md:text-2xl lg:text-3xl pb-4">
              Looking for new job opportunities at THN IT Solutions ?{" "}
            </h2>
            <p className="pb-2 text-justify  md:text-sm lg:text-base">
              Are you passionate about software development and eager to
              contribute to cutting-edge technology solutions? THN IT Solutions
              is looking for talented individuals to join our dynamic team!
            </p>
            <p className="text-justify md:text-sm lg:text-base">
              At THN IT Solutions, we are at the forefront of innovation,
              crafting cutting-edge software solutions that empower businesses
              and individuals alike. Our commitment to excellence, coupled with
              a passion for technology, drives us to create software that makes
              a meaningful impact. As we continue to expand our team, we are
              seeking talented and motivated individuals to join us on our
              journey.
            </p>
          </div>
          <div className="py-8">
            <h3 className="pb-4 text-lg font-bold">
              Why Join THN IT Solutions
            </h3>
            <ul className="list-disc pl-4 space-y-2">
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
              A collaborative and inclusive work culture that values innovation.
            </li>
            </ul>
          </div>
        </div>
        <div className="justify-center flex-1 p-5">
          <img
            src={svg}
            alt="svg image"
            className="h-full bg-cover mix-blend-multiply"
          />
        </div>
      </div>

      <div className="grid gap-5 p-5 mb-8 lg:p-0 md:grid-cols-2 lg:grid-cols-3 ">
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
          className="card bg-base-100 shadow-xl border-[2px] rounded-box "
          key={index}
        >
          <div className="card-body">
            <h2 className="text-2xl font-bold card-title">
              {" "}
              <img src={data.url} alt="" height={"50vh"} width={"50vw"} />{" "}
              {data.name}
            </h2>
            <p className="pt-4 pl-2 text-sm text-justify">{data.description}</p>
            <div className="flex mt-4 card-actions ">
              <Link to={data.path}>
                <a className="px-4 py-2 ml-2 text-white no-underline bg-gray-800 rounded-full hover:bg-gray-700 hover:shadow">
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
