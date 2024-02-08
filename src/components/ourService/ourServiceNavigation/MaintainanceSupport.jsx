

import TabServiceWrapper from "./TabServiceWrapper"
import {MaintenanceSupportServices} from './ourServiceNavData'

const MaintainanceSupport = () => {
  return (
    <section className="about-us mt-10 lg:max-w-6xl mx-auto">
   
    <h1 className="text-5xl text-center font-bold ">Application Development</h1>
    <TabServiceWrapper data={MaintenanceSupportServices} />
    </section>
  )
}

export default MaintainanceSupport