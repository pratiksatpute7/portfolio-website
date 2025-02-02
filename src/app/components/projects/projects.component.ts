import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: "Quantum/Thinklink by School Specialty",
      shortDescription: "A scalable digital learning platform with over 2 million users, focused on knowledge sharing and collaboration.",
      techIcons: [
        "assets/icons/angular.svg",
        "assets/icons/javascript.svg",
        "assets/icons/html5.svg",
        "assets/icons/css3.svg",
        "assets/icons/dotnetcore.svg",
        "assets/icons/mongodb.svg",
        "assets/icons/rabbitmq.svg",
        "assets/icons/redis.svg",
        "assets/icons/docker.svg",
        "assets/icons/aws.svg",
        "assets/icons/azure.svg",
        "assets/icons/mysql.svg",
        "assets/icons/jira.svg"
      ],
      image: "assets/project.png",
      details: [
        "Led rostering module integration, enabling seamless onboarding of 2 million users via Single Sign-On (SSO).",
        "Engineered a data transfer feature between CMS and LMS using RabbitMQ, reducing errors by 25% and ensuring data integrity.",
        "Architected a Redis caching solution, reducing database usage by 50% and enhancing system performance and response times.",
        "Designed and developed the Digital Teacher's Guide application using Angular and MongoDB, enabling custom annotation tools.",
        "Deployed Docker containers to AWS and Azure, improving scalability and reliability."
      ]
    },
    {
      name: "LeetCode Solutions (C++)",
      shortDescription: "A collection of solved LeetCode problems in C++, regularly updated.",
      techIcons: [
        "assets/icons/cpp.svg",
        "assets/icons/leetcode.svg",
        "assets/icons/github.svg"
      ],
      image: "assets/project.png",
      details: [
        "Includes solutions to a wide range of LeetCode problems, from Easy to Hard.",
        "C++ solutions optimized for performance and readability.",
        "Regularly updated with new problems and solutions.",
        "Uses Data Structures & Algorithms concepts such as Trees, Graphs, DP, and more."
      ],
      repoLink: "https://github.com/pratiksatpute7/LeetCode-cpp"
    },
    {
      name: "CES-581 DBMS Course Work Project",
      shortDescription: "A database management system project focused on efficient query handling and data management.",
      techIcons: [
        "assets/icons/mssql.svg",
        "assets/icons/mysql.svg",
      ],
      image: "assets/project.png",
      details: [
        "Designed and implemented a relational database schema with optimized indexing.",
        "Developed SQL queries and stored procedures for efficient data retrieval.",
        "Implemented transaction management and query optimization techniques.",
        "Designed an ER diagram and normalized database structures to reduce redundancy."
      ],
      repoLink: "https://github.com/pratiksatpute7/CES-581-DBMS-course-work-project"
    },
    {
      name: "Gomoku AI",
      shortDescription: "An AI-based Gomoku game with enhanced board control and strategic decision-making.",
      techIcons: [
        "assets/icons/python.svg"
      ],
      image: "assets/project.png",
      details: [
        "Developed an advanced evaluation function for Gomoku AI, improving central board control.",
        "Implemented the Minimax Algorithm with heuristic analysis, leading to a 25% increase in win rates over the baseline model.",
        "Enhanced AI decision-making, improving move accuracy by 20%."
      ],
      repoLink: "https://github.com/pratiksatpute7/Gomoku-AI"
    },
    {
      name: "Letterboxd Analysis",
      shortDescription: "A Natural Language Processing project analyzing movie reviews for sentiment and sarcasm detection.",
      techIcons: [
        "assets/icons/python.svg",
      ],
      image: "assets/project.png",
      details: [
        "Conducted sentiment analysis to classify movie reviews as positive, negative, or neutral.",
        "Implemented sarcasm detection algorithms to identify sarcastic comments in reviews.",
        "Analyzed trends in sentiment and sarcasm across different film genres over time.",
        "Utilized Python libraries such as Pandas and scikit-learn for data processing and model development."
      ],
      repoLink: "https://github.com/pratiksatpute7/Letterbox-Analysis"
    },
    {
      name: "Drowsy Driver Detection System",
      shortDescription: "A real-time machine learning solution to detect driver fatigue and prevent accidents.",
      techIcons: [
        "assets/icons/python.svg",
        "assets/icons/opencv.svg"
      ],
      image: "assets/project.png",
      details: [
        "Developed a real-time Drowsy Driver Detection System using Python and CNN, achieving 96% accuracy in detecting driver fatigue.",
        "Designed a framework to monitor eye movements and trigger real-time alerts, enhancing road safety.",
        "Implemented computer vision techniques for live video processing and driver behavior analysis."
      ]
    },
    {
      name: "Forkify",
      shortDescription: "A recipe search application that fetches real-time data from an API.",
      techIcons: [
        "assets/icons/javascript.svg",
        "assets/icons/html5.svg",
        "assets/icons/css3.svg"


      ],
      image: "assets/project.png",
      details: [
        "Implemented a food recipe search app fetching data from an external API.",
        "Designed an intuitive UI for displaying ingredient lists and cooking instructions.",
        "Optimized search functionality with real-time filtering options."
      ],
      repoLink: "https://github.com/pratiksatpute7/Forkify"
    },
    {
      name: "Student Management System",
      shortDescription: "A web-based platform to manage student records and academic progress.",
      techIcons: [
        "assets/icons/react.svg",
        "assets/icons/html5.svg",
        "assets/icons/css3.svg",
        "assets/icons/mongodb.svg",
        "assets/icons/nodejs.svg",
        "assets/icons/dotnetcore.svg",
        "assets/icons/jira.svg"
      ],
      image: "assets/project.png",
      details: [
        "Developed a full-stack student management system using Angular and Node.js.",
        "Implemented CRUD functionalities for student records with MongoDB.",
        "Designed a responsive user interface for easy data entry and reporting."
      ],
      repoLink: "https://github.com/pratiksatpute7/Student-Management-System"
    },
    {
      name: "Textbook Creator",
      shortDescription: "A tool designed to generate structured textbooks from unstructured text data.",
      techIcons: [
        "assets/icons/python.svg",
        "assets/icons/jupyter.svg"
      ],
      image: "assets/project.png",
      details: [
        "Developed a Jupyter Notebook to process and structure unformatted text into organized textbook chapters.",
        "Implemented Natural Language Processing techniques to identify key topics and subtopics.",
        "Created a workflow to convert raw text files into a cohesive textbook format.",
        "Utilized Python libraries to automate the structuring and formatting process."
      ],
      repoLink: "https://github.com/pratiksatpute7/Textbook-Creator"
    },
    {
      name: "Web Article Summarizer & Translator",
      shortDescription: "A web-based tool for summarizing and translating articles using NLP techniques.",
      techIcons: [
        "assets/icons/python.svg",
      ],
      image: "assets/project.png",
      details: [
        "Developed a text summarization tool using NLP models to extract key insights.",
        "Integrated Google Translate API for real-time multilingual translations.",
        "Built a user-friendly web interface for seamless article processing."
      ],
      repoLink: "https://github.com/pratiksatpute7/web-artical-summarizer-and-translation"
    },
    {
      name: "Sheets",
      shortDescription: "A project that interacts with Google Sheets API for automated data management.",
      techIcons: [
        "assets/icons/javascript.svg",
        "assets/icons/html5.svg",
        "assets/icons/css3.svg"
      ],
      image: "assets/project.png",
      details: [
        "Integrated Google Sheets API for real-time data manipulation and automation.",
        "Developed scripts to automate data entry, retrieval, and formatting.",
        "Implemented authentication and secure API interactions using OAuth2."
      ],
      repoLink: "https://github.com/pratiksatpute7/Sheets"
    },
    {
      name: "PIG Game",
      shortDescription: "A simple two-player dice game implemented in JavaScript.",
      techIcons: [
        "assets/icons/javascript.svg",
        "assets/icons/html5.svg",
        "assets/icons/css3.svg"
      ],
      image: "assets/project.png",
      details: [
        "Developed an interactive web-based dice game where players roll to accumulate points.",
        "Implemented game rules using JavaScript event listeners and logic control.",
        "Added animations and dynamic UI updates to enhance the gaming experience."
      ],
      repoLink: "https://github.com/pratiksatpute7/PIG-Game"
    },
  ];
}
