import projectimg from "../assets/images/sample_exp_pic.png";
import python from "../assets/icons/python.png";
import flask from "../assets/icons/flask.png";
import dart from "../assets/icons/dart.png";
import matplot from "../assets/icons/matplot.png";
import pandas from "../assets/icons/pandas.png";
import seaborn from "../assets/icons/seaborn.png";
import tkinter from "../assets/icons/tkinter.png";
import edaProject from "../assets/images/eda.png";
import git from "../assets/icons/git.png";

export const myProjects = [
  {
    img: edaProject,
    title:
      "Project 1: Employee mental health Analysis: Insights from Workpace Surveys",
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
    about:
      "  This project delves into the analysis of mental health cases among employees across various organizations. The project aims to uncover patterns and correlations that can inform better mental health practices and support systems within organizations.",
  },
  {
    img: projectimg,
    title: `Project 2: Machine Learning Analysis on Developer/nCompensation: Stack Overflow 2024`,
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
    about: ` This project (coursework) focuses on applying various machine learning (ML) models to analyze and predict developers' annual compensation. The study leverages data from the ${`"Stack Overflow 2024 Annual Developer Survey"`}, which captures information about the annual salaries of developers from diverse countries, industries, skills, and experience levels. The primary objectives of this project include performing Clustering Analysis (Unsupervised Learning) to group developers based on similar compensation patterns, Classification (Supervised Learning) to categorize developers into high and low-income groups, and Regression Analysis (Supervised Learning) to predict their annual compensation.`,
  },
  {
    img: projectimg,
    title: "Project 3: Masters in Artificial Intelligence",
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
    about:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a, abculpa sunt deleniti quod nisi velit! Libero in quae sun excepturiasperiores ipsum earum, doloremque porro nobis impedit laborum? ipsumdolor sit amet consectetur adipisicing elit. Dolorem a, ab culpa suntdeleniti quod nisi velit! Libero in quae sunt excepturi asperiores ipsumearum, doloremque porro nobis impedit laborum? ipsum dolor sit ametconsectetur adipisicing elit. Dolorem a, ab culpa sunt deleniti quodnisi velit! Libero in quae sunt excepturi asperiores ipsum earudoloremque porro nobis impedit laborum?",
  },
];
