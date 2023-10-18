"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { GiTeamIdea } from "react-icons/gi"
import { choose } from "@/lib/data";


const About = () => {

  const easing = [0.5, 0.8, -0.35, 0.01];
  const slideInLeft = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.8, -0.35, 0.01],
      },
    },
  };
  const slideInRight = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.8, -0.35, 0.01],
      },
    },
  };


  return (
    <section className="overflow-hidden">
      <div className="w-full relative px-4 lg:px-14 py-24 lg:py-40  bg-[#171717] ">
        <motion.div initial={{ y: 250 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute z-10 left-28 lg:left-52 right-0 bottom-0 ">
          <Image src="/logo_red.png" alt="logo" width={350} height={350} className="mix-blend-screen opacity-20 " />
        </motion.div>
        <div className="bg-path z-5" />
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          className="relative w-full h-full  grid grid-cols-1 lg:grid-cols-12 mx-auto items-center px-2 "
        >
          <motion.div
            variants={slideInLeft}
            className="antialiased  col-span-1 lg:col-span-8 space-y-2 leading-relaxed"
          >
            <span className="flex text-white items-center font-semibold text-4xl lg:text-7xl w-full lg:w-4/6 ">
              <Image src="/logo.png" alt="logo" width={80} height={80} /><span className="relative -left-2">bout Us</span>
            </span>
            <div className="pt-6 ">
              <h2 className="text-white">APLUS MULTI KREASI</h2>
              <h3 className="text-3xl textCustom  lg:text-5xl tracking-wide lg:tracking-wide text-transparent font-extrabold uppercase">
                inspiring partner
              </h3>
            </div>
          </motion.div>
          <div className=" px-6 lg:px-3 col-span-1 lg:col-span-4  relative top-8">
            
          </div>
        </motion.div>
      </div>
      <div className="w-full h-full relative bg-[#fff] grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-12 justify-center px-4 py-10 lg:py-20 lg:px-20">
        <div className="relative w-full h-full">
          <div className="w-4 h-4 lg:h-44 rounded-full hidden lg:block bg-red-600 absolute -left-5 top-0 z-0" />
          <h3 className="col-span-1 lg:col-span-1 relative">A STORY OF APLUS COMPANY</h3>
        </div>
        <div className="col-span-1 lg:col-span-6">
          <div className="p-4 border-2 border-gray-500">
            <Image
              src="/event.jpg"
              alt="about us"
              width={1200}
              height={800}
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-5 w-full lg:w-5/6 mx-auto">
          <p className="text-lg text-[#636262]">
            We are event and production management whose entire team works together  to accomplish one mission, to create the equation through quality, trust and ease.
            We understand that planning an event can be extremely stressful, confusing, and upredictable. We promise where things might be stressful, we will make it easy. We pride ourselves on the quality of our integrated event service and the event management we deliver to create the ultimate live event for our clients. We want to bring it all together for our client, just like creating an equation to provide you the perfect solution.
          </p>
        </div>
      </div>


      {/* Why Choose Us */}
      <div className="relative w-full h-full py-14 px-2 lg:py-24 lg:px-14 bg-black overflow-hidden">
        <div className="w-full h-full pb-14">
          <span className="text-zinc-500 text-[18px]">— Why Choose Us ??</span>
          <p className=" text-[22px] md:text-[28px] lg:text-[36px] text-zinc-400 w-full lg:w-[75%] pt-4">
            We Focus on finding ways to make your life as easy as possible when planning an event & production.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 lg:my-0 ">
          {choose?.map((c, i) => (
            
              <div key={i} className="flex gap-2 w-full h-full mb-4 lg:mb-0 text-white flex-col bg-gradient-to-tr from-black to-zinc-800 rounded p-4 md:p-8">
                <span className="text-5xl">{c?.icons}</span>
                <h3 className="text-md uppercase text-zinc-300 mb-2">{c?.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{c?.desc}</p>
              </div>
           
          ))}
        </div>
      </div>


      {/* Team Card */}
      {/* <div className="py-14 px-4 w-full h-full">
        <div className="text-center ">
          <h3 className="text-xl lg:text-4xl text-zinc-200">— OUR PROFESSIONAL TEAM —</h3>
          <p className="text-zinc-400 text-sm pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div> */}
    </section>
  )
}

export default About