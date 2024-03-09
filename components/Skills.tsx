'use client'

import { skillsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks';

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref} 
      id="skills"
      className='mb-8 max-w-[53rem] scroll-m-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <li 
            key={index} 
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills