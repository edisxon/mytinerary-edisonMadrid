
import Carousel from "../components/Carousel";


const cities = [
    {
      id: 1,
      name: "New York",
      image: "https://image.nuevayork.es/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg.webp",
      country: "United States",
    },
    {
      id: 2,
      name: "Paris",
      image: "https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg",
      country: "France",
    },
    {
      id: 3,
      name: "Tokyo",
      image: "https://as1.ftcdn.net/v2/jpg/04/98/23/10/1000_F_498231018_6w6Zt0h2PdU4Muy5Tvph2VeNG67yTuwl.jpg",
      country: "Japan",
    },
    {
      id: 4,
      name: "London",
      image: "https://londresando.com/wp-content/uploads/sites/15/2022/03/big-ben-londres.jpeg",
      country: "United Kingdom",
    },
    {
      id: 5,
      name: "Sydney",
      image: "https://www.civitatis.com/blog/wp-content/uploads/2018/01/vista-opera-house-sidney.jpg",
      country: "Australia",
    },
    {
      id: 6,
      name: "Mexico City",
      image: "https://media.vogue.mx/photos/5f95dc072b8eeeefbed2b680/16:9/w_1280,c_limit/Ciudad-de-Me%CC%81xico-Zo%CC%81calo.jpg",
      country: "Mexico",
    },
    {
      id: 7,
      name: "Dubai",
      image: "https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?w=1440&h=810&fit=crop&auto=format&q=75",
      country: "United Arab Emirates",
    },
    {
      id: 8,
      name: "Berlin",
      image: "https://as2.ftcdn.net/v2/jpg/00/88/36/03/1000_F_88360307_QEGcNQ6MrJ5BaYhhrl7tqw1ndPXRZeGp.jpg",
      country: "Germany",
    },
    {
      id: 9,
      name: "Toronto",
      image: "https://cdn.britannica.com/35/100235-050-CE3936EE/view-CN-Tower-Toronto-skyline-observation-deck.jpg",
      country: "Canada",
    },
    {
      id: 10,
      name: "Rome",
      image: "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2024/03/21064745/italia-roma.jpg",
      country: "Italy",
    },
    {
      id: 11,
      name: "Seoul",
      image: "https://content.r9cdn.net/rimg/dimg/30/0c/6318617a-city-35982-163ff913019.jpg?width=1200&height=630&xhint=2421&yhint=1876&crop=true",
      country: "South Korea",
    },
    {
      id: 12,
      name: "São Paulo",
      image: "https://elviajista.com/wp-content/uploads/2019/02/hacersaopaulo.jpg",
      country: "Brazil",
    }
  ];

export function Home() {
    return(
        <div className='flex flex-col items-center  justify-center'>
            <h1 className='lg:text-4xl text-2xl  font-bold text-white'>Most visited cities </h1>
            <Carousel cities={cities} ></Carousel>
        </div>
    )

}