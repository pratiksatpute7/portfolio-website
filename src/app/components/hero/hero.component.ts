import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  roles = ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer', 'Tech Enthusiast'];
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