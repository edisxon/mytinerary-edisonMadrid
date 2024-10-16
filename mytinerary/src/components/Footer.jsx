
import insta from "../assets/instagram.com.png"
import face from "../assets/facebook.com.png"


export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white p-4 text-center w-full flex justify-between flex-col-reverse lg:flex-row gap-6 ">
            <div className="flex lg:justify-start justify-center lg:w-1/3">
                <img className="w-24" src={insta} alt="" />
                <img className="w-16" src={face} alt="" />
            </div>

            <div className="gap-5 flex items-center justify-center lg:text-2xl lg:w-1/3">
                <a href="">Customer Support</a>
                <a href="">About Us</a>
            </div>

            <div className="lg:w-1/3">
                
                <form className="flex flex-col justify-center lg:justify-end items-center gap-2">
                    <h6 className="">receive new information</h6>
                    <div className="flex justify-center lg:justify-end items-center gap-2">
                        <input 
                        type="email" 
                        placeholder="type your e-mail" 
                        className="px-4 py-2 w-64 border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button type="submit" className="bg-blue-950 text-white flex rounded-3xl p-2 text-center"> send</button>
                    </div>
                    
                </form>
            </div>
            
           
        </footer>
    );
}
