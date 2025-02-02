import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [CommonModule, MatIconModule]
})
export class EducationComponent {
  education = [
    { 
      degree: "Master of Science, Computer Science", 
      institution: "Syracuse University", 
      year: "Aug 2023 - May 2025", 
      description: "GPA: 3.9 / 4. Relevant coursework includes: Design & Analysis of Algorithms, Intro to Artificial Intelligence, Applied Natural Language Processing, Principles of Operating Systems, Internet of Things - App Development, Principles of Social Media and Data Mining, and Computer Architecture.",
      color: "#007acc"
    },
    { 
      degree: "Bachelor of Engineering, Computer Engineering", 
      institution: "University of Mumbai - Rajiv Gandhi Institute of Technology", 
      year: "Jul 2016 - Oct 2020", 
      description: "GPA: 3.7 / 4. Focused on software development, data structures, and machine learning concepts. Developed various academic projects including an Asynchronous Interview Analysis tool and a Drowsy Driver Detection System.",
      color: "#ff9800"
    }
  ];
}
