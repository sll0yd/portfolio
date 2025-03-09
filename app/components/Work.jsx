import { workData, assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

const Work = ({ isDarkMode }) => {
  // Single background color for all project cards is now replaced with a gradient

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my
        expertise in front-end development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <Link href={project.link || "#"} key={index} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-lg relative cursor-pointer group flex items-center justify-center overflow-hidden shadow-md"
              style={{ 
                background: "linear-gradient(135deg, #f0f0f0 0%, #d0d0d0 100%)"
              }}
            >
              <div className="bg-white w-10/12 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-6 flex items-center justify-between duration-500 group-hover:scale-105">
                <div className="flex flex-col">
                  <h2 className="font-semibold text-lg leading-tight">{project.title}</h2>
                  <p className="text-sm text-gray-700 leading-tight mt-2">{project.description}</p>
                  {/* Display tech stack if available */}
                  {project.techStack && (
                    <p className="text-xs text-gray-500 mt-2 leading-tight">{project.techStack}</p>
                  )}
                </div>
                <div className="border rounded-full border-black w-9 h-9 flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image src={assets.send_icon} alt="send icon" className="w-5" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="w-max mx-auto my-20"
      >
        <Link href="/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500
          dark:text-white dark:border-white dark:hover:bg-darkHover">
          Show more{' '}
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt=""
            className="w-4"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Work;