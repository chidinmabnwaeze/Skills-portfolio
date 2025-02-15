// import React, { useState } from "react";
// import { myProjects } from "../data/project-cards";

// const Projects = () => {
//   const [handSlider, setHandSlider] = useState(0);

//   const handleSliding = () => {};

//   return (
//     <main
//       id="projects"
//       className="project mt-16 p-4 rounded-md "
//       // js-scroll hideScroll (add these styles later to main)
//     >
//       <div className="title m-12 text-center">
//         <h1 className="text-3xl font-medium">Projects</h1>
//         <p>Here are some of my projects </p>
//       </div>
//       <section className=" flex p-4 gap-4 overflow-x-scroll scroll-smooth bg-purple-300 hide-scrollbar">
//         {myProjects.map((project) => (
//           <section
//             className="w-[800px] flex-shrink-0 rounded-lg bg-white shadow-lg p-4"
//             key={project.title}
//           >
//             <section className="image">
//               <img
//                 src={project.img}
//                 alt="project-image"
//                 className=" object-cover"
//               />
//             </section>
//             <section className="text-part">
//               <div className="title m-12 text-center">
//                 <h1 className="text-3xl font-medium">{project.title}</h1>
//                 <span className="icons flex justify-center p-2">
//                   <img
//                     className="w-6 m-3"
//                     src={project.icons.icon1}
//                     alt="python"
//                   />
//                   <img
//                     className="w-6 m-3"
//                     src={project.icons.icon2}
//                     alt="flask"
//                   />
//                   <img
//                     className="w-6 m-3"
//                     src={project.icons.icon3}
//                     alt="dart"
//                   />
//                 </span>
//                 <p>{project.about}</p>
//               </div>
//             </section>
//             <section className="text-white text-center">
//               &bull; &bull; &bull;
//             </section>
//           </section>
//         ))}
//       </section>
//     </main>
//   );
// };

// export default Projects;

import React from "react";
import { myProjects } from "../data/project-cards";

const Projects = () => {
  return (
    <main id="projects" className="mt-16 p-4 rounded-md js-scroll hideScroll">
      {/* Title */}
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Projects</h1>
        <p>Here are some of my projects</p>
      </div>

      {/* Scrollable Container */}

      <div className="scroll-container flex gap-4 overflow-x-scroll scroll-smooth hide-scrollbar p-4 bg-purple-400">
        {myProjects.map((project) => (
          <section
            key={project.title}
            className="flex-shrink-0 w-[800px] bg-white shadow-lg rounded-md p-4"
          >
            <div className="image">
              <img
                src={project.img}
                alt="project-image"
                className="w-full rounded-md"
              />
            </div>
            <div className="text-part text-center mt-4">
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <div className="icons flex justify-center gap-3 p-2">
                <img className="w-6" src={project.icons.icon1} alt="python" />
                <img className="w-6" src={project.icons.icon2} alt="flask" />
                <img className="w-6" src={project.icons.icon3} alt="dart" />
              </div>
              <p className="text-gray-700 text-sm">{project.about}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Projects;
