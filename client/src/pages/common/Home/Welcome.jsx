import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className=" text-white flex justify-center -ml-60  items-center flex-col max-sm:ml-0">
      <motion.div
        className="flex justify-start items-center -mt-10 flex-col"
        initial={{ opacity: 0, y: 500, x: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 500, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
          }}
          className="text-6xl text-bold tracking-tighter my-10 text-center pt-5 bg-clip-text bg-gradient-to-r from-orange-400 to-green-300 inline-block text-transparent max-sm:text-3xl"
        >
          Welcome to Quiz App
        </motion.h1>
        <motion.p
          transition={{
            duration: 3,
          }}
          className="my-2 text-md  inline-block text-white max-sm:hidden"
        >
          Challenge yourself with a variety of engaging topics
        </motion.p>
        <motion.p
          transition={{
            duration: 3,
          }}
          className="my-2 text-md  inline-block text-white max-sm:hidden"
        >
          Real-time scoring and feedback to track your progress
        </motion.p>

        <motion.p
          transition={{
            duration: 3,
          }}
          className="my-2 text-md  inline-block text-white max-sm:hidden"
        >
          Learn new facts and sharpen your skills in an enjoyable way
        </motion.p>
        <motion.p
          transition={{
            duration: 3,
          }}
          className="my-2 text-md  inline-block text-white max-sm:hidden"
        >
          Regular updates with fresh questions and quizzes
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Welcome;
