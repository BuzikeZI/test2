import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	students$: Observable<Student[]>;
	private searchTerms = new Subject<string>();

  constructor(private studentService: StudentService) { }

  search(term: string): void{
  	this.searchTerms.next(term);
  }
  ngOnInit(): void {
  	this.students$ = this.searchTerms.pipe(
  		debounceTime(300),

  		distinctUntilChanged(),

  		switchMap((term: string)=> this.studentService.searchStudents(term)),

  		);
  }

}
