import { FaLinkedinIn , FaInstagram , FaTwitter , FaFacebookF  , FaGithub   } from "react-icons/fa";

const Footer = ()=>{
    return <div className="flex p-6 bg-[white] flex-row flex-wrap justify-around">
        <img src="mainprofile.png" alt="profile" />
        <div className="p-4 mt-5 md:w-1/2">
            <h1 className="text-4xl font-bold text-center">Get into touch</h1>
            <div className="flex mt-5 justify-center">
                <div className="p-1 border-[1px] border-dark text-xl hover:bg-dark mr-2 hover:text-default ease-in duration-75">
                <FaGithub   />
                </div>
                <div className="p-1 border-[1px] border-dark text-xl hover:bg-dark mr-2 hover:text-default ease-in duration-75">
                <FaLinkedinIn  />
                </div>
                <div className="p-1 border-[1px] border-dark text-xl hover:bg-dark mr-2 hover:text-default ease-in duration-75">
                <FaInstagram   />
                </div>
                <div className="p-1 border-[1px] border-dark text-xl hover:bg-dark mr-2 hover:text-default ease-in duration-75">
                <FaTwitter   />
                </div>
                <div className="p-1 border-[1px] border-dark text-xl hover:bg-dark mr-2 hover:text-default ease-in duration-75">
                <FaFacebookF    />
                </div>
            </div>
            <p className="mt-5">Experienced and versatile software developer with a proven track record in designing, developing, and maintaining high-quality software applications. </p>
        </div>
    </div>
}

export default Footer 