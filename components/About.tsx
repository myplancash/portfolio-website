"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
   const { ref } = useSectionInView("About");


  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A Former Business Administrator now a Full-stack software developer with over +5 years of professional experience in React.js, <strong> JavaScript, React.js, Next.js, Redux, Node.js, Firebase, Typescript, Unit Testing, PostgreSQL, Next.js</strong>
        <br />
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy staying active with workouts, immersing myself in uplifting content through reading, and nurturing my entrepreneurial spirit by exploring new business ideas.
      </p>
    </motion.section>
  );
}
