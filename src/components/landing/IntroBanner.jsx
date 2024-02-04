import Container from "../wrappers/Container"
import svg from '../../assets/banner.svg'
const IntroBanner = (props) => {
  return (
    <section className="banner pb-16 px-28 h-auto">
        <Container className='flex  justify-center items-center w-full h-80 rounded-lg drop-shadow-md border-white   bg-gradient-to-r from-gray-900 via-gray-700 to-black relative overflow-hidden'>
            <img src={svg} className="object-cover w-full h-full absolute " alt="img" />
        <h1 className="text-5xl w-max text-white font-bold drop-shadow-md animate-pulse">{props.title}</h1>
        </Container>
    </section>
  )
}

export default IntroBanner