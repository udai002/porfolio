import {motion} from 'framer-motion'

const Projects = ()=>{
    return <div className="p-6 md:p-10 flex flex-row flex-wrap justify-center">
        <motion.div initial={{y:100}} animate={{y:0}} transition={{duration:0.8}} className="flex flex-col justify-center bg-[white] w-[284px] p-6 rounded-md mr-4 mb-5">
            <motion.img whileHover={{scale:1.2 , transition:{duration:0.5}}}  src="pro1.png" alt="python snake" className=" w-[240px]" />
            <div>
                <h1 className="font-bold text-xl pt-3">Python snake game</h1>
                <p>This is a snake game using html css javascript</p>
                <ul className='flex flex-row'>
                    <li className='mr-2 mt-3 py-[1px] px-2 rounded border-[1px] text-sm'>HTML</li>
                    <li className='mr-2  mt-3 py-[1px] px-2 rounded border-[1px] text-sm'>CSS</li>
                </ul>
            </div>
        </motion.div>
        <motion.div initial={{y:100}} animate={{y:0}} transition={{duration:0.8}} className="flex flex-col justify-center bg-[white] w-[284px] p-6 rounded-md mr-4 mb-5">
            <motion.img whileHover={{scale:1.2 , transition:{duration:0.5}}}  src="pro1.png" alt="python snake" className=" w-[240px]" />
            <div>
                <h1 className="font-bold text-xl pt-3">Python snake game</h1>
                <p>This is a snake game using html css javascript</p>
                <ul className='flex flex-row'>
                    <li className='mr-2 mt-3 py-[1px] px-2 rounded border-[1px] text-sm'>HTML</li>
                    <li className='mr-2  mt-3 py-[1px] px-2 rounded border-[1px] text-sm'>CSS</li>
                </ul>
            </div>
        </motion.div>
        
        
    </div>

}

export default Projects