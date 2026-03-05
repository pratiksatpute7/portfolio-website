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
      degree: "Master of Science, Computer and Information Sciences",
      institution: "Syracuse University, New York, USA",
      year: "Aug 2023 - May 2025",
      description: "GPA: 3.9 / 4. Focused on algorithms, AI, NLP, operating systems, and scalable software systems.",
      color: "#007acc"
    },
    {
      degree: "B.E., Computer Engineering",
      institution: "University of Mumbai, Mumbai, India",
      year: "Jul 2016 - Oct 2020",
      description: "GPA: 3.8 / 4. Strong foundation in software engineering, data structures, and systems programming.",
      color: "#ff9800"
    }
  ];
}
