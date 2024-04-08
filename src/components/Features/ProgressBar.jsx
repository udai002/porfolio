import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ScrollTrigger from "react-scroll-trigger"

const ProgressBar = (props) => {
    const {skill , percent} = props
    // const [progress , setProgress] = useState(0)
    const [isRunning , setIsRunning] = useState(false)
  return (<ScrollTrigger onEnter={()=>setIsRunning(true)} onExit={()=>setIsRunning(false)}>
    <div className='w-full md:w-1/2 my-4 m-auto'>
        <p className='font-semibold'>{skill}</p>
        <div className='md:w-full border-2'>
      {isRunning?<motion.div initial={{width:0}} animate={{width:`${percent}%`}} transition={{ duration:0.8}} className='h-[30px] border-dark w-full bg-dark border-2 '>

      </motion.div>:""}
        </div>
       
    </div>
       </ScrollTrigger>
  )
}

export default ProgressBar
