import TabServiceWrapper from "./TabServiceWrapper"
import {QualityEngineeringService} from './ourServiceNavData'

const QualityEngineering = () => {
  return (
    <section className="about-us mt-10 lg:max-w-6xl mx-auto">
   
    <h1 className="text-5xl text-center font-bold ">Quality Engineering</h1>
    <TabServiceWrapper data={QualityEngineeringService} />
    </section>
  )
}

export default QualityEngineering