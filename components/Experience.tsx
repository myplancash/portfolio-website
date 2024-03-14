"use client"

import { Fragment } from 'react';
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section 
      id="experience" 
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgba(107, 114, 128, 0.2)">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "rgba(249, 250, 251, 0.5)" : "rgba(75, 85, 99, 0.5)", // Light and dark mode background color with transparency
                boxShadow: "none",
                border: "1px solid rgba(107, 114, 128, 0.2)", // Change border color and opacity
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid rgba(156, 163, 175, 0.5)" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={<item.icon />}
              iconStyle={{
                background: theme === "light" ? "rgba(107, 114, 128, 0.5)" : "rgba(209, 213, 219, 0.5)", // Light and dark mode icon background color with transparency
                fontSize: "2rem",
              }}
            >
              <h3 className="font-semibold capitalize text-gray-900 dark:text-white">{item.title}</h3> {/* Change text color */}
              <p className="font-normal !mt-0 text-gray-600 dark:text-gray-300">{item.location}</p> {/* Change text color */}
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
