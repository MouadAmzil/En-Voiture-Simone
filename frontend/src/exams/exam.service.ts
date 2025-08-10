import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from './exam.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExamService {
  private baseUrl = 'http://localhost:3000/api/exams';

  constructor(private http: HttpClient) {}

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.baseUrl);
  }

  addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.baseUrl, exam);
  }
}
