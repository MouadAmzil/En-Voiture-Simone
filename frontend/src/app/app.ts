import { Component } from '@angular/core';
import { ExamComponent } from './exam/exam';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExamComponent],
  template: `<app-exam></app-exam>`,
  styleUrls: ['./app.css']
})
export class App {}
