import Education from "../Education"
import CountAnimation from "../Features/CountAnimation"
import Skills from "../Skills"


import './index.css'

const About = () => {
    return <div>
        <div className="bg-[white] flex flex-row justify-around p-4 md:h-[260px] pb-10 flex-wrap">
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-row items-end">
                    <CountAnimation startNum={0} endNum={2} /><span>yrs</span>
                </div>
                <h1 className="font-bold text-3xl ">Experience</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-row items-center">
                    <CountAnimation startNum={0} endNum={10} /><span className="text-4xl font-bold">+</span>
                </div>
                <h1 className="font-bold text-3xl ">Projects</h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-row items-end">
                    <CountAnimation startNum={0} endNum={100} /><span className="text-4xl font-bold" >+</span>
                </div>
                <h1 className="font-bold text-3xl ">Problems</h1>
            </div>
        </div>

        <Education/>

        <Skills  />

        

    </div>
}

export default About