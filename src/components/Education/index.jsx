import { FaDotCircle } from "react-icons/fa";

const Education = ()=>{
    return <div className="">
    <h1 className="text-center text-3xl font-bold mt-10 mb-6">Education</h1>
    <div className="timeline after:w-[6px] after:bg-dark after:absolute after:content-[''] md:after:h-[60%] after:h-[90%] after:left-1/2" id="timeline">
    </div>
    <div className="w-1/2 left-0 relative p-4 flex justify-end  ">
        <div className=" relative  p-4 w-fit bg-[white] ">
            <h1 className="font-bold italic">B Tech</h1>
            <p className="font-semibold italic">lovely professional university ,Punjab</p>
            <p className="font-mono">2020 - 2024</p>
            <div className="absolute  top-1/2 -right-[1.7rem]">
                <FaDotCircle className="z-10" />
            </div>
        </div>

    </div>
    <div className="w-1/2 left-1/2  relative p-4  ">
        <div className=" relative  p-4 w-fit bg-[white]">
            <h1 className="font-bold italic">Intermediate Education</h1>
            <p p className="font-semibold italic">Narayana College, vijayawada</p>
            <p className="font-mono">2018 - 2020</p>
            <div className="absolute  top-1/2 -left-[1.26rem]">
                <FaDotCircle className="z-10" />
            </div>
        </div>

    </div>
    <div className="w-1/2 left-0  relative p-4 flex justify-end ">
        <div className=" relative  p-4 w-fit bg-[white]">
            <h1 className="font-bold italic">Secondary Board Education</h1>
            <p className="font-semibold italic">Flora Public School , Vuyyuru</p>
            <p className="font-mono">2017 - 2018</p>
            <div className="absolute  top-1/2 -right-[1.7rem]">
                <FaDotCircle className="z-10" />
            </div>
        </div>

    </div>

</div>
}


export default Education