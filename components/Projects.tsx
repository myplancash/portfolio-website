import React from 'react';
import Project from './Project'; // Import the Project component
import { projectsData } from '@/lib/data';

const Projects = () => {
  return (
    <section>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} imageUrl={project.imageUrl.src} /> {/* Render the Project component */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects; // Export the Projects component as default
