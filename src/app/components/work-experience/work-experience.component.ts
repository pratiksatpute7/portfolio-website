import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  imports: [CommonModule, MatIconModule]
})
export class WorkExperienceComponent {
  workExperience = [
    { 
      role: "Software Engineer", 
      company: "Govsphere, Inc.", 
      duration: "Jan 2025 – Present", 
      description: "Developing Next Gen Vital Apps, a cross-platform mobile healthcare application for monitoring vitals, recovery, and rehabilitation. Migrating systems from .NET 3.0 to .NET 8.0, improving scalability, performance, and maintainability.",
      icon: "developer_mode",
      color: "#ff9800"
    },
    { 
      role: "Software Engineer - Machine Learning", 
      company: "iConsult Collaborative", 
      duration: "Nov 2024 – Present", 
      description: "Collaborated with the City of Syracuse on a data-driven urban project to enhance traffic control and flood prediction using 1,500 sensors in traffic signals and near waterfalls.",
      icon: "data_usage",
      color: "#007acc"
    },
    { 
      role: "Senior Software Engineer", 
      company: "Zeus Learning", 
      duration: "Jul 2020 - Jul 2023", 
      description: "Built scalable REST APIs in .NET Core with Microservices Architecture, reducing errors by 30%, enhancing system resilience. Developed responsive front-end components with Angular and Typescript.",
      icon: "code",
      color: "#ff5722"
    }
  ];
}
