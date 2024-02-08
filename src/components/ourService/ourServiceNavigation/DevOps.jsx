import TabServiceWrapper from "./TabServiceWrapper"
import {DevOpsServices} from './ourServiceNavData'

const DevOps = () => {
  return (
    <section className="about-us mt-10 lg:max-w-6xl mx-auto">
   
    <h1 className="text-5xl text-center font-bold ">DevOps</h1>
    <TabServiceWrapper data={DevOpsServices} />
    </section>
  )
}

export default DevOps