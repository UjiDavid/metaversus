'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[42%] left-[38%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[50%] left-[16%] w-[160px] h-[140px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="/upside-down.png" alt="worlds" className="w-full h-full rounded-[24px]" />
          <div className="absolute bottom-[5%] left-[8%] p-[6px]">
            <div className="flex items-center justify-start gap-1">
              <div className="flex pb-[8px]">
                <img src="/Ellipse-1.png" alt="people" className="z-30" />
                <img src="/Ellipse-3.png" alt="people" className="-ml-[10px] z-20" />
                <img src="/Ellipse-2.png" alt="people" className="-ml-[10px]" />
              </div>
              <h4 className="text-white text-[10px] leading-[15px]">+264 People Joined</h4>
            </div>
            <h4 className="text-white text-normal text-[16px] leading-[23px]">The Upside Down</h4>
          </div>
        </div>
        <div className="absolute top-[13%] right-[30%] w-[160px] h-[140px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="/hawkins-labs.png" alt="worlds" className="w-full h-full rounded-[24px]" />
          <div className="absolute bottom-[5%] left-[8%] p-[6px]">
            <div className="flex items-center justify-start gap-1">
              <div className="flex pb-[8px]">
                <img src="/Ellipse-1.png" alt="people" className="z-30" />
                <img src="/Ellipse-3.png" alt="people" className="-ml-[10px] z-20" />
                <img src="/Ellipse-2.png" alt="people" className="-ml-[10px]" />
              </div>
              <h4 className="text-white text-[10px] leading-[15px]">+264 People Joined</h4>
            </div>
            <h4 className="text-white text-normal text-[16px] leading-[23px]">Hawkins Labs</h4>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
