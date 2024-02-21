function CICD() {
  return (
    <>
      <p className="mt-[2%] mb-[4%] md:mx-[5%] text-justify text-sm">
        CI/CD stands for Continuous Integration and Continuous Delivery (or
        Continuous Deployment), and it's a set of practices and principles aimed
        at automating the software delivery process to ensure rapid and reliable
        delivery of high-quality software.
      </p>

      <div className="gap-4  md:flex">
        <div className="md:w-[20%] items-center my-auto text-start">
          <h1 className="font-bold sm:text-[20px] pb-[2vh]">
            Continuous Integration (CI)
          </h1>
          <p className="sm:text-base text-sm text-justify">
            Continuous Integration is the practice of frequently integrating
            code changes into a shared repository, such as Git, where automated
            build and test processes are triggered
          </p>
        </div>

        <div className="md:w-[60%]">
          <img src="/cicd.png" alt="CICD" />
        </div>
        <div className="md:w-[20%] items-center my-auto md:text-end">
          <h1 className="font-bold sm:text-[20px] pb-[2vh]">
            Continuous Delivery (CD)
          </h1>
          <p className="sm:text-base text-sm text-justify">
            Continuous Delivery is the practice of automating the deployment
            process to ensure that software can be reliably released at any
            time.
          </p>
        </div>
      </div>

      <div className="md:flex justify-between gap-[4%]">
        <div className="">
          <h2 className="md:text-[32px] text-xl text-center px-4 py-4 font-bold">
            Continuous Integration (CI)
          </h2>

          <div className="text-justify ">
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">
                Frequent Code Integration :
              </b>
              Developers integrate their code changes into the main codebase
              frequently, often multiple times a day..
            </li>
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">Automated Builds :</b>{" "}
              Whenever code changes are pushed to the repository, an automated
              build process is triggered to compile the code and generate
              executable artifacts.
            </li>
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">Automated Testing :</b>{" "}
              Automated tests, including unit tests, integration tests, and
              other types of tests, are run automatically to ensure that the new
              code changes haven't introduced any regressions.
            </li>
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">Early Feedback :</b> CI
              provides early feedback to developers about the quality of their
              code changes, helping to identify and fix issues quickly
            </li>
          </div>
        </div>

        <div className="">
          <h2 className="md:text-[32px] text-xl text-center px-4 py-4 font-bold">
            Continuous Delivery (CD)
          </h2>

          <div className="text-justify">
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">
                Automated Deployment :
              </b>
              Once code changes pass the automated tests in the CI pipeline,
              they are automatically deployed to a staging or pre-production
              environment.
            </li>
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">
                Infrastructure as Code (IaC) :
              </b>{" "}
              Infrastructure configurations are managed as code (e.g., using
              tools like Terraform or CloudFormation), allowing for consistent
              and repeatable deployments.
            </li>
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">
                Release Orchestration :
              </b>{" "}
              CD pipelines are orchestrated to manage the release process,
              including approvals, canary deployments, and rollbacks
            </li>
            <li className="sm:text-[15px] text-sm sm:font-semibold py-[4%] text-slate-600">
              <b className="sm:text-[18px] text-slate-800">
                Continuous Monitoring :
              </b>{" "}
              Monitoring and logging are integrated into the deployment pipeline
              to ensure that deployed applications are performing as expected,
              and any issues are detected and addressed promptly.
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default CICD;
