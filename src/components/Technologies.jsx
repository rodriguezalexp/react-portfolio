import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
         className="my-40 text-center text-4xl"> Technologies
        </motion.h2>
        <motion.div
        whileInView={{ opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
         className="flex flex-wrap items-center justify-center gap-4 ">
          <motion.div
          variants= {iconVariants(2.5)}
          initial= "initial"
          animate= "animate"
          className="border-4 border-purple-300 border-t-purple-500 rounded-2xl p-4 ">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div
          variants= {iconVariants(3)}
          initial= "initial"
          animate= "animate"
           className="border-purple-300 border-t-purple-500 border-4 rounded-2xl boder-4  p-4">
          <FaPython className="text-7xl text-yellow-400"/>
          </motion.div>
          <motion.div
          variants= {iconVariants(3.5)}
          initial= "initial"
          animate= "animate"
           className=" border-purple-300 border-t-purple-500 border-4 rounded-2xl boder-4 p-4">
          <DiDjango className="text-7xl text-green-400"/>
          </motion.div>
          <motion.div
          variants= {iconVariants(4)}
          initial= "initial"
          animate= "animate"
           className="border-4 border-purple-300 border-t-purple-500 rounded-2xl boder-4  p-4">
          <FaNodeJs className="text-7xl text-lime-400"/>
          </motion.div>
          <motion.div
          variants= {iconVariants(4.5)}
          initial= "initial"
          animate= "animate"
           className="border-4 border-purple-300 border-t-purple-500 rounded-2xl boder-4 p-4">
          <SiMongodb className=" text-7xl text-lime-900"/>
          </motion.div>
          <motion.div
          variants= {iconVariants(5)}
          initial= "initial"
          animate= "animate"
          className="border-4 border-purple-300 border-t-purple-500 rounded-2xl boder-4 p-4">
          <DiPostgresql className="text-7xl text-sky-700"/>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies;
