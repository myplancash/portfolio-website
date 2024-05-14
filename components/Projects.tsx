"use client";

import React, {useEffect} from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section 
      ref={ref} 
      id="projects" className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData && projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        )).filter((_, i) => i < 3)}
      </div>
    </section>
  );
}