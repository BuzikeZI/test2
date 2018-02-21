import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit() {

  }

  add(name: string,gender: string): void{
  	name = name.trim();
  	if (!name) { return; }
  	this.studentService.addStudent({ name, gender } as Studnet)
      .subscribe();
  }
}
