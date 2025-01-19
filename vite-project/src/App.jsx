
import React from 'react'
import {anticipate, motion} from 'framer-motion'
const App = () => {
  return (
    <motion.div>
      <motion.div
        // drag
        // dragConstraints={{
        //   top:0,
        //   left:0,
        //   right:1000,
        //   bottom:300
        // }}
        // dragDirectionLock="true"
        // whileHover={{
        //   backgroundColor:'green'
        // }}
        // whileTap={{
        //   scale:0.9
        // }}

        animate={{
          x: 1300,
          y: 500,
          rotate: -360,
        }}
        transition={{
          duration: 2,
          delay: 1,
          ease: anticipate,
          repeat: Infinity,
        }}
        id="box"
      ></motion.div>
      <motion.h1></motion.h1>
    </motion.div>
  );
}

export default App
