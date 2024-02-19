import ProfileCards from "./ProfileCard";
import LeaderProfileCard from "./LeaderProfilecard";
import {
  CEOdata,
  DirectorTechnicalHead,
  TechnicalExpartDatas,
  TeamDatas,
} from "./profiledata";
import TechnicalExpartCard from "./TechnicalExpart";

function Profile() {
  return (
    <section className="mx-auto profile career-page md:mb-8 about-us lg:max-w-7xl">
      <div className="m-5  bg-[url('/Banner.png')] bg-cover rounded-lg md:p-10">
        <h2 className="p-6 text-2xl font-bold text-center text-white md:text-4xl">
        Messages from the Top Leaders
        </h2>
      </div>

      <div className="flex items-center gap-5 p-5 mx-auto ">
        <LeaderProfileCard leadermsgData={CEOdata} />
      </div>

      <div className="flex items-center gap-5 p-5 mx-auto ">
        <LeaderProfileCard leadermsgData={DirectorTechnicalHead} style=" md:grid-cols-2"/>
      </div>
      <div className="mx-5 md:mt-10  bg-[url('/Banner.png')] bg-cover rounded-lg md:p-10">
        <h2 className="p-6 text-4xl font-bold text-center text-white">
        Technical Expert
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2 place-content-center">
        <TechnicalExpartCard TechnicalExpartData={TechnicalExpartDatas} />
      </div>
      <div className="mx-5 md:mt-10  bg-[url('/Banner.png')] bg-cover rounded-lg md:p-10">
        <h2 className="p-6 text-4xl font-bold text-center text-white">
          Technical Team Members
        </h2>
      </div>
      <div className="grid gap-5 md:gap-10 m-5 md:grid-cols-3 lg:grid-cols-4 place-content-center">
        <ProfileCards TeamData={TeamDatas} />
      </div>
    </section>
  );
}

export default Profile;
