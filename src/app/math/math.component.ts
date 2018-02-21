import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
	top: Student[] = [];
	students: Student[] = [];
	temp: Student ;
	i: number;
  	j: any;

  constructor(private studentService : StudentService) { }

  ngOnInit() {
  	this.getStudents();
  	
  }

  getStudents(): void{
  	this.studentService.getStudents().subscribe(students=>this.top=students);
  	console.log(this.top);

  // 	for(this.i=0;this.i<this.students.length;this.i++){
  // 		for(this.j=this.i+1;this.j<this.students.length;this.j++){
  // 			if(this.students[this.i].math<this.students[this.j].math){
  // 				this.temp = this.students[this.i];
  // 				this.students[this.i] = this.students[this.j];
  // 				this.students[this.j] = this.temp;
  // 			}
  // 		}
  // }
  }


  
}
