
import Carousel from "../components/Carousel";

function Home() {
    return(
        <div className='flex flex-col items-center  justify-center'>
            <h1 className='text-4xl font-bold text-white'>Most visited cities </h1>
            <Carousel cities={cities} ></Carousel>
        </div>
    )

}