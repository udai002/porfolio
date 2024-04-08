import { useEffect, useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"


const CountAnimation = (props) =>{
    const {startNum , endNum } = props
    const [countOn , setCountOn] = useState(false)
 return <div>
     <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
            {countOn && <CountUp start={startNum} end={endNum} duration={1.5} className="text-5xl font-bold "  />}
        </ScrollTrigger>
 </div>
}

export default CountAnimation