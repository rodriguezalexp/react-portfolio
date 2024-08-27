import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";





const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl"> Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl boder-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
          </div>
          <div className="rounded-2xl boder-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400"/>
          </div>
          <div className="rounded-2xl boder-4 border-neutral-800 p-4">
          <DiDjango className="text-7xl text-green-400"/>
          </div>
          <div className="rounded-2xl boder-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-lime-400"/>
          </div>
          <div className="rounded-2xl boder-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-lime-900"/>
          </div>
          <div className="rounded-2xl boder-4 border-neutral-800 p-4">
          <DiPostgresql className="text-7xl text-sky-700"/>
          </div>
        </div>
    </div>
  );
};

export default Technologies;
