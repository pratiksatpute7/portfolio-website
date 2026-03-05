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
      role: "Software Developer",
      company: "London Stock Exchange Group (LSEG), New York, NY",
      duration: "Nov 2025 - Present",
      description: "Improving traceability, reliability, and performance of high-QPS quantitative pricing services. Driving production engineering, root-cause analysis, and observability with Datadog across distributed systems in a low-latency environment.",
      icon: "query_stats",
      color: "#ff9800"
    },
    {
      role: "Software Engineer - Research Intern",
      company: "Syracuse University, New York, NY",
      duration: "Oct 2025 - Nov 2025",
      description: "Designed a RAG-based healthcare self-triage chatbot architecture using LLMs and public medical sources. Built a Python prototype with Flask and LangChain for grounded, explainable responses.",
      icon: "biotech",
      color: "#2a9d8f"
    },
    {
      role: "Software Engineer Intern",
      company: "Govsphere Inc, Syracuse, NY",
      duration: "Jan 2025 - Sept 2025",
      description: "Built REST APIs in ASP.NET Core and TypeScript services with pagination, versioning, secure authentication, and structured error handling. Contributed to .NET 8 migration and delivered React Native apps for real-time patient workflows.",
      icon: "developer_mode",
      color: "#007acc"
    },
    {
      role: "Senior Software Engineer",
      company: "Zeus Learning, Mumbai, India",
      duration: "Jul 2020 - Jul 2023",
      description: "Architected modular .NET APIs and JWT-based SSO, built event-driven services using RabbitMQ and Redis, and optimized performance with JMeter and dotTrace to reduce API latency by 40%.",
      icon: "code",
      color: "#ff5722"
    }
  ];
}
