import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Countrate() {
  const [counterOn, setcounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setcounterOn(true)}
        onExit={() => setcounterOn(false)}
      >
        <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
          <h3 className="text-4xl font-bold p-2">Join the Energy Revolution</h3>
          <h3 className="text-sm p-2">
            TSN Technosolutions is actively engaged in POWER & ENERGY Solutions,
            with active cooperation from reputed Multi-National Companies to
            provide Efficient and Reliable Solutions, along with its own
            experience and strength in the Development, Support and Marketing.
          </h3>
        </div>

        <div className="stats shadow flex justify-center  mb-20 w-[90%] mx-auto ">

          <div className="stat justify-center bg-gray-200">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title"></div>
            <div className="stat-value text-primary">
              {counterOn && (
                <CountUp start={0} end={165} duration={2} delay={0} />
              )}
              +
            </div>
            <div className="stat-title text-black">Support Given</div>
          </div>

          <div className="stat bg-gray-200">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title"></div>
            <div className="stat-value text-primary">
              {counterOn && (
                <CountUp start={0} end={254} duration={2} delay={0} />
              )}
              +
            </div>
            <div className="stat-title text-black">Clients Rating</div>
          </div>

          <div className="stat bg-gray-200">
            <div className="stat-figure text-secondary ">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                </div>
              </div>
            </div>
            <div className="stat-value"></div>
            <div className="stat-value text-primary">
              {counterOn && (
                <CountUp start={0} end={2000000} duration={2} delay={0} />
              )}
              +
            </div>
            <div className="stat-title text-black">Money Saved</div>
          </div>

          <div className="stat bg-gray-200">
            <div className="stat-figure text-primary ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title"></div>
            <div className="stat-value text-primary">
              {counterOn && (
                <CountUp start={0} end={145} duration={2} delay={0} />
              )}
              +
            </div>
            <div className="stat-title text-black">Happy Clients</div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Countrate;

//
