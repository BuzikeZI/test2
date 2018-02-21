import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  	this.getStudents();
  }

  getStudents(): void{
  	this.studentService.getStudents().subscribe(students=> this.students = students);
  }

  delete(student: Student): void{
    this.students = this.students.filter(s=>s!==student);
    this.studentService.deleteStudent(student).subscribe();
  }
}
