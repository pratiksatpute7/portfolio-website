import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [CommonModule, MatButtonModule, RouterModule],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  roles = [
    'Software Developer at LSEG',
    'Full-Stack Engineer',
    'Backend and Cloud Engineer',
    'ML and NLP Research Enthusiast'
  ];
  dynamicText = this.roles[0];

  constructor() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    let index = 0;
    setInterval(() => {
      this.dynamicText = this.roles[index];
      index = (index + 1) % this.roles.length;
    }, 3000);
  }
}
