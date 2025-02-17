import * as prj from "../assets/images/index.js"
import * as icons from "../assets/icons/index.js"

export const myProjects = [
  {
    img: prj.mentalhealth,
    title: "Employee mental health Analysis",
    icons: {
      skills: [
        { icon: icons.python },
        { icon: icons.pandas },
        { icon: icons.matplot },
        { icon: icons.seaborn },
        { icon: icons.tkinter },
        { icon: icons.github },
      ],
    },
    about: `This project delves into the analysis of mental health cases among employees across 
      various organizations.The project aims to uncover patterns and correlations that can
      inform better mental health practices and support systems within organizations.`,

    link: "https://github.com/guavacoderepo/SOFT40161-COURSE-WORK",
  },

  {
    img: prj.dev,
    title: `Machine Learning Analysis on Developer Compensation`,
    icons: {
      skills: [
        { icon: icons.python },
        { icon: icons.pandas },
        { icon: icons.matplot },
        { icon: icons.seaborn },
        { icon: icons.sklearn },
        { icon: icons.github },
      ],
    },
    about: ` This project applies machine learning models to analyze and 
    predict developers' annual compensation using data from the Stack Overflow
    2024 Annual Developer Survey. The objectives include clustering developers
    based on compensation patterns, classifying them into high and low-income groups,
    and using regression analysis to predict their salaries.`,

    link: "https://github.com/guavacoderepo/-COMP40721-COURSE-WORK",
  },

  {
    img: prj.crime,
    title: "Crime Analysis forcasting",
    icons: {
      skills: [
        { icon: icons.python },
        { icon: icons.pandas },
        { icon: icons.matplot },
        { icon: icons.seaborn },
        { icon: icons.tkinter },
        { icon: icons.github },
      ],
    },
    about: ` This project focuses on analyzing crime trends in Nigeria through data collected by 
      scraping multiple news websites. The objective is to identify patterns and relationships
      in criminal activities, providing insights that can guide law enforcement in improving crime
      prevention strategies and resource allocation.`,
    link: "https://drive.google.com/drive/folders/1PUaIuer4M07q66fzsGiT2NcUkGAOKg-4?usp=drive_link",
  },
];
