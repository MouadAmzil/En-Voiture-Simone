import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Exam {
  id?: string;      
  name: string;
  location: string;
  date: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './exam.html',
  styleUrls: ['./exam.css']
})
export class ExamComponent implements OnInit {
  exams: Exam[] = [];
  newExam: Exam = { name: "", location: "", date: "", time: "", status: "" };
isModeADD=false
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadExams();
  }
  SiwtchMode(){
this.isModeADD=!this.isModeADD;
  }

  loadExams() {
    this.http.get<any>('http://localhost:3000/api/exams')
      .subscribe(data => this.exams = data);
  }

  addExam() {
    if (!this.newExam.name || !this.newExam.date) return;
    this.http.post<any>('http://localhost:3000/api/exams', this.newExam)
      .subscribe(() => {
        this.newExam = { name: "", location: "", date: "", time: "", status: "" };
        this.loadExams();
      });
  }
  getStatusClass(status: string): string {
  switch (status) {
    case 'En recherche de place':
      return 'status-en-recherche';
    case 'Annulé':
      return 'status-annule';
    case 'Confirmé':
      return 'status-confirme';
    default:
      return 'status-organiser';
  }
}
}
