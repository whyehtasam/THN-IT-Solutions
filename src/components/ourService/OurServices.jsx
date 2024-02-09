
import { IntroServiceCardData } from "./ourServiceData"
import TabServices from "./TabServices"

 const OurServices = () => {
  return (
    <section className="mx-auto mt-16 about-us lg:max-w-7xl">
    <h1 className="text-5xl font-bold text-center ">Explore our services</h1>
    <TabServices  data={IntroServiceCardData}  />
    </section>
  )
}

export default OurServices