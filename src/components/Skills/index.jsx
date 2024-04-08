import ProgressBar from "../Features/ProgressBar"

const Skills = ()=>{
    return <div className="p-4 ">
        <h1 className="font-bold text-center text-3xl ">Skills</h1>
        <ProgressBar skill='ReactJs' percent={80} />
        <ProgressBar skill='NodeJs' percent={60} />
        <ProgressBar skill='Python' percent={50} />
    </div>
}

export default Skills