import projectimg from "../assets/images/sample_exp_pic.png";
import python from "../assets/icons/python.png";
import matplot from "../assets/icons/matplot.png";
import pandas from "../assets/icons/pandas.png";
import seaborn from "../assets/icons/seaborn.png";
import tkinter from "../assets/icons/tkinter.png";
import edaProject from "../assets/images/eda.png";
import edaProject2 from "../assets/images/eda_2.png";
import git from "../assets/icons/git.png";
import sklearn from "../assets/icons/Sklearn.png";

export const myProjects = [
  {
    img: edaProject,
    title: "Employee mental health Analysis",
    icons: {
      skills: [
        { icon: python },
        { icon: pandas },
        { icon: matplot },
        { icon: seaborn },
        { icon: tkinter },
        { icon: git },
      ],
    },
    about: `This project delves into the analysis of mental health cases among employees across 
      various organizations.The project aims to uncover patterns and correlations that can
      inform better mental health practices and support systems within organizations.`,

    link: "https://github.com/guavacoderepo/SOFT40161-COURSE-WORK",
  },

  {
    img: edaProject2,
    title: `Machine Learning Analysis on Developer Compensation`,
    icons: {
      skills: [
        { icon: python },
        { icon: pandas },
        { icon: matplot },
        { icon: seaborn },
        { icon: sklearn },
        { icon: git },
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
    img: projectimg,
    title: "Crime Analysis forcasting",
    icons: {
      skills: [
        { icon: python },
        { icon: pandas },
        { icon: matplot },
        { icon: seaborn },
        { icon: tkinter },
        { icon: git },
      ],
    },
    about: ` This project focuses on analyzing crime trends in Nigeria through data collected by 
      scraping multiple news websites. The objective is to identify patterns and relationships
      in criminal activities, providing insights that can guide law enforcement in improving crime
      prevention strategies and resource allocation.`,
    link: "https://drive.google.com/drive/folders/1PUaIuer4M07q66fzsGiT2NcUkGAOKg-4?usp=drive_link",
  },
];
