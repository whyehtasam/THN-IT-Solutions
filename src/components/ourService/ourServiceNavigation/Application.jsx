import { IntroServiceCardData } from "../ourServiceData"

import TabServices from "../TabServices"
import TabServiceWrapper from "./TabServiceWrapper"
import {webApplicationDevelopmentServices} from './ourServiceNavData'

const Application = () => {
  return (
    <section className="about-us mt-10 lg:max-w-7xl mx-auto">
   
    <h1 className="text-5xl text-center font-bold ">Application Development</h1>
    {/* <TabServices  data={IntroServiceCardData}  /> */}
    <TabServiceWrapper data={webApplicationDevelopmentServices} />
    </section>
  )
}

export default Application