import {useState} from 'react'
import {motion} from 'framer-motion'
import { IoClose } from "react-icons/io5";

const Navbar = () =>{
    
    const [openNav ,  setOpenNav] = useState(false)

    const onClickOpenNav = ()=>{
        setOpenNav(true)
    }

     
        return <div className="md:p-4 p-4">
            {openNav?<div className='w-full h-[100vh] bg-[black]/35 fixed top-0 left-0' onClick={()=>setOpenNav(false)}></div>:''}
    <div className="flex flex-row justify-between items-center">
        <div className='md:hidden p-4' onClick={onClickOpenNav}>
            <div className='border-b-2 border-black w-8 mb-2'></div>
            <div className='border-b-2 border-black w-8 mb-2'></div>
            <div className='border-b-2 border-black w-8 mb-2'></div>
        </div>
        <img src="logo.png" alt="Logo" />
        <div className="md:block hidden">
            <ul className="flex font-semibold text-lg mt-3">
                <li className="mr-6 ">Home</li>
                <li className="mr-6">Projects</li>
                <li className="mr-6">About</li>
                <li className="mr-6">Contact Me</li>
            </ul>
        </div>
        {openNav?<motion.div initial={{x:-300}} animate={{x:0}} transition={{bounce:0}} className="top-0 w-[200px] h-[100vh] fixed bg-default flex flex-col justify-center left-0 md:hidden ">
        <ul className="flex flex-col font-semibold text-lg mt-3 text-center">
                <li className="mb-6 ">Home</li>
                <li className="mb-6">Projects</li>
                <li className="mb-6">About</li>
                <li className="mb-6">Contact Me</li>
            </ul>
        </motion.div>:''}
        <button className="px-3 py-2 bg-color1 text-[#ffffff] rounded">Hire Me</button>
    </div>

   
</div>
}
export default Navbar 