import ProfileCards from "./ProfileCard";
import LeaderProfileCard from "./LeaderProfilecard";
import { CEOdata, DirectorTechnicalHead, TechnicalExpartDatas, TeamDatas } from "./profiledata";
import TechnicalExpartCard from './TechnicalExpart'

function Profile() {
  return (
    <div className="profile">
      <div className="my-6 mx-16 border-[2px] bg-[url('/Banner.png')] bg-cover rounded-2xl">
        <h2 className="text-4xl text-center text-white font-[1000] py-6">
          Messages from the Top Leaders
        </h2>
      </div>

      <div className="w-[70%] flex items-center mx-auto">
        <LeaderProfileCard leadermsgData={CEOdata} />
      </div>

      <div className="grid grid-cols-2 gap-[2%] place-content-center mx-[5vh] mt-[2vh] mb-[10vh]">
        <LeaderProfileCard leadermsgData={DirectorTechnicalHead} />
      </div>
      <div className="my-6 mx-16 border-[2px] bg-[url('/Banner.png')] bg-cover rounded-2xl">
        <h2 className="text-4xl text-center text-white font-[1000] py-6">
          Technical Expert
        </h2>
      </div>
      <div className="grid grid-cols-2 place-content-center gap-20 my-[8vh] mx-[12vh]">
        <TechnicalExpartCard TechnicalExpartData={TechnicalExpartDatas}/>
      </div>
      <div className="my-6 mx-16 border-[2px] bg-[url('/Banner.png')] bg-cover rounded-2xl">
        <h2 className="text-4xl text-center text-white font-[1000] py-6">
          Technical Team Members
        </h2>
      </div>
      <div className="grid grid-cols-4 place-content-center mx-[10%] gap-12">
        <ProfileCards TeamData={TeamDatas}/>
      </div>
    </div>
  );
}

export default Profile;
