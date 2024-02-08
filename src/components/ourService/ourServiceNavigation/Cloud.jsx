import { IntroServiceCardData } from "../ourServiceData"


import TabServiceWrapper from "./TabServiceWrapper"
import {CloudServices} from './ourServiceNavData'

const Application = () => {
  return (
    <section className="about-us mt-10 lg:max-w-6xl mx-auto">
   
    <h1 className="text-5xl text-center font-bold ">Application Development</h1>
    {/* <TabServices  data={IntroServiceCardData}  /> */}
    <TabServiceWrapper data={CloudServices} />
    </section>
  )
}

export default Application