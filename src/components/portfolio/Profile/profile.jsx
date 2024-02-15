//import ProfileCards from './ProfileCard'
import ceopic from './images/CEO.jpg';
import DirectorPic from './images/Director.jpg';
import TechnicalHeadPic from './images/Technical-Head.jpg'

function Profile()
{
    return(
        <div className="profile bg-[#00000006]">

            <h2 className='text-4xl text-center font-[1000] my-[3%]' >Messages from the Top Leaders</h2> 
        
        <div class="mx-auto flex items-center rounded-2xl bg-base-100 drop-shadow-lg w-[70%]">
            <div className='flex gap-[2%]'>

            
            <figure className='w-[35%]'>
            <div className="rounded-2xl bg-base-100 ">
            <img src={ceopic} alt="CEO" className='h-[80%] rounded-t-2xl' />
            <div className="px-[2vw] py-[2vh]">
                <h2 className="card-title">Mr. Nazrul Islam Mallick</h2>
                <p>CEO</p>
            </div>
            </div>
            </figure>
            <div class=" w-[60%]">
                <h2 class="font-semibold py-[2vh]">Message from CEO :</h2>
                <p className='text-sm px-2 py-1'>As CEO of THN IT Solutions, I wanted to take a moment to express my heartfelt appreciation for our clients' continued trust and partnership with us. Your support has been instrumental in our journey, and we are truly grateful for the opportunity to serve you.As your dedicated technology solutions provider, we remain committed to delivering excellence and innovation in every aspect of our collaboration. Our goal is to exceed your expectations and drive your success through our services.</p>
                <p className='text-sm px-2 py-1'>Finally, I want to extend my heartfelt congratulations to our dynamic team members who work tirelessly to ensure our clients' satisfaction. Their dedication, expertise, and hard work are the driving force behind our success, and I am immensely proud of each and every one of them.</p>
                <p className='text-sm px-2 py-1'>Thank you once again for your continued support and partnership. We look forward to serving you and helping you achieve your business objectives.</p>
            
            </div>
            </div>
        </div>

        <div className='flex justify-between mx-[5%] gap-[3%] my-[3%]'>
        <div class="flex rounded-2xl bg-base-100 drop-shadow-lg w-[50%]">
            <div className='flex gap-[2%]'>
            <figure className='w-[35%]'>
            <div className="rounded-2xl bg-base-100 ">
            <img src={DirectorPic} alt="DirectorPic" className='h-[80%] rounded-t-2xl' />
            <div className="px-[2vw] py-[2vh]">
                <h2 className="card-title">Mrs. Sureba Khatun</h2>
                <p>Director</p>
            </div>
            </div>
            </figure>
            <div class=" w-[60%] ">
                <h2 class="font-semibold text-lg pt-[2vh]">Director Message :</h2>
                <p className='text-sm px-2 py-1'>As Director of THN IT Solutions, I am honored to extend my warmest greetings and appreciation for our client's continued trust in our services. Your partnership is the cornerstone of our success, and we are deeply grateful for the opportunity to collaborate with you.</p>
                <p className='text-sm px-2 py-1'>I also want to take this opportunity to extend my heartfelt congratulations to our exceptional team members. Their unwavering dedication, expertise, and passion for excellence are the driving forces behind our success, and I am immensely proud of each and every one of them.</p>
                
            </div>
            </div>
        </div>
        <div class=" flex rounded-2xl bg-base-100 drop-shadow-lg w-[50%]">
            <div className='flex gap-[2%]'>

          
            <figure className='w-[35%]'>
            <div className="rounded-2xl bg-base-100 ">
            <img src={TechnicalHeadPic} alt="TechnicalHeadPic" className='h-[80%] rounded-t-2xl' />
            <div className="px-[2vw] py-[2vh]">
                <h2 className="card-title">Mrs. Sk Mohumita Mousum</h2>
                <p>Technical Head</p>
            </div>
            </div>
            </figure>
            <div class=" w-[60%] ">
                <h2 class="font-semibold py-[2vh]">Technical Head Message :</h2>
                <p className='text-sm px-2'>As Technical Head of THN IT Solutions, I am honored to have the opportunity to work alongside such a talented and dedicated group of individuals. Your commitment to excellence and passion for innovation are truly inspiring, and I am immensely proud to be part of this team.</p>
                <p className='text-sm px-2'>I want to extend my sincerest thanks to each and every one of you for your unwavering dedication and commitment to our team and to our company's mission. Together, we have achieved great things, and I am confident that with our continued collaboration and determination, we will accomplish even more in the days ahead.</p>
                
            </div>
            </div>
        </div>
        </div>
        
     </div>

    )
}


export default Profile;