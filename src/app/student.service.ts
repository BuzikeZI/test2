import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from './student';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

	private studentsUrl = 'api/students'; 

  constructor(
	private http: HttpClient,
 	private messageService: MessageService) { }
  	
  getStudents (): Observable<Student[]> {
  return this.http.get<Student[]>(this.studentsUrl);
}
	
 getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => this.log(`fetched student id=${id}`)),
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

getTop(): Observable<Student[]>{
  return this.http.get<Student[]>(this.students)
}


addStudent (student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, httpOptions).pipe(
      tap((student: Student) => this.log(`added student w/ id=${student.id}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }	
searchStudents(term: string): Observable<Student[]> {
    if (!term.trim()) {
      
      return of([]);
    }
    return this.http.get<Student[]>(`api/students/?name=${term}`).pipe(
      tap(_ => this.log(`found students matching "${term}"`)),
      catchError(this.handleError<Student[]>('searchStudents', []))
    );
  }

 updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions).pipe(
      tap(_ => this.log(`updated student id=${student.id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

 deleteStudent (student: Student | number): Observable<Student> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted student id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('StudentService: ' + message);
  }
}
