import profileImage from '../assets/profile.png'
import video from "../assets/videoplayback.mp4"
import { useState } from "react";
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <> 
            <div className='relative'>
            
                <div className="w-full flex justify-between px-2 pb-1 bg-blue-600 z-50 absolute" >
                
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <SidebarMenu></SidebarMenu>
                        <img className="w-14" src="https://images.vexels.com/content/279735/preview/south-america-flat-continents-map-11e9a4.png" alt="" />
                        
                    </div>
                    <div className='flex items-center justify-center'>
                        <h1 className=' lg:text-3xl text-xl font-bold'>Mytinerary</h1>
                    </div>
                    
                    <img className='w-20 lg:w-14' src={profileImage} alt="" />
                
                </div>

                <BackgroundVideo></BackgroundVideo>   
             </div> 
        
        </>


    )
}

function BackgroundVideo(){
  return (
    <div className="relative w-full h-screen z-0">
    
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute top-1/2 left-1/2 min-w-full w-auto h-screen transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-2xl lg:text-6xl font-bold drop-shadow-lg">
            Find your perfect trip, designed by insiders who know and love their cities!
        </h1>
      </div>
    </div>
  );
};



export function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div className='flex items-center justify-center w-full h-full'>
            <button onClick={toggleMenu} className="bg-blue-950 text-white flex rounded-3xl  p-2">
                Menu
            </button>
        </div>

  
        {isOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black opacity-50"
          ></div>
        )}
  
        
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-blue-950 text-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <ul>
              <li className="py-2"><a href="#home">Home</a></li>
              <li className="py-2"><a href="#about">Cities</a></li>
              <li className="py-2"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }