import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link_d,
}) => (
  <motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div  className='relative w-full h-[230px]'>
  <img
  src={testimonial}
  alt='project_image'
  className='w-full h-full object-cover rounded-2xl'
  />


  </div>
  {/* <p className='text-white font-black text-[48px]'>"</p> */}

  <div className='mt-1'>
    {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}

    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'>@</span> {name}
        </p>
        <p className='mt-1 text-secondary text-[12px]  cursor-pointer'
          onClick={() => window.open(link_d, "_blank")}
        >
          {designation} {company}

        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-10 h-10 rounded-full object-cover'
      />
    </div>
  </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Want to see more?</p>
          <h2 className={styles.sectionHeadText}>Main Links</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
