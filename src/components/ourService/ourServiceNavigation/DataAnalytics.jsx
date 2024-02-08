
import TabServiceWrapper from "./TabServiceWrapper"
import {DataAnalyticsServices} from './ourServiceNavData'

const DataAnalytics = () => {
  return (
    <section className="about-us mt-10 lg:max-w-6xl mx-auto">
   
    <h1 className="text-5xl text-center font-bold ">Analytics & Business Intelligence </h1>
    <TabServiceWrapper data={DataAnalyticsServices} />
    </section>
  )
}

export default DataAnalytics