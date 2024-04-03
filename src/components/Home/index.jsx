import {motion} from 'framer-motion'
import AnimatedText from '../Features/AnimatedText'
const Home = ()=><div>
    <div className="flex flex-row justify-center pt-10 md:justify-around items-center flex-wrap ">
        <img src="mainprofile.png" className="md:w-[320px]" alt="Udai sai avatar" />
        <div className="p-2 md:w-1/2">
            <motion.h1 initial={{opacity:0.2 , y:30}} animate={{opacity:1,y:0}} transition={{duration:2}} className="md:text-5xl text-3xl mt-10 font-bold  text-center">Turning Vision into Reality using Code</motion.h1>
        </div>
    </div>
    <div className='flex flex-row justify-center  md:mt-20  text-center p-4 md:px-20'><p>
        <span><AnimatedText text='Skilled in utilizing a range of programming languages, frameworks, and tools to create efficient, scalable, and user-friendly applications. Possess a strong understanding of software development methodologies and best practices, along with a continuous learning mindset to stay updated with emerging technologies. Demonstrated ability to troubleshoot and resolve complex technical issues, ensuring smooth project execution and client satisfaction. ' loop className="text-center italic w-[60%]" /></span>
    </p>
    
    </div>

</div>

export default Home