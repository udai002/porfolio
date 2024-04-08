import React from 'react'
// import useTypewriter from "react-typewriter-hook"
import { ReactTyped } from 'react-typed'

const AnimatedText = (props) => {
    const {text , loop , className } = props
    console.log(className)
    
   return (
    <div>
      <ReactTyped strings={[text]} typeSpeed={30} backSpeed={50}  className={`${className}`}   />
    </div>
  )
}

export default AnimatedText
