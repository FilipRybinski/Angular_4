import { Component, OnInit } from '@angular/core';
import { Student, StudentClass } from '../../types/student';
import { WhichType } from '../viewstudent/viewstudent.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: StudentClass[] = [];

  constructor() { }
  obj1 = { nazwa: 'Matematyka', ocena: 6 };
  obj2 = { nazwa: 'Polski', ocena: 5 };
  obj3 = { nazwa: 'Przyrka', ocena: 3 };
  ngOnInit() {
    console.log("Students");
    this.students[0] = new StudentClass("Ala", "Makota", 123485);
    this.students[1] = new StudentClass("Jan", "Kowlaski", 2345);
    this.students.push(new StudentClass("Adrian", "Duda", 156789));
    this.students[0].oceny.push(this.obj1);
    this.students[0].oceny.push(this.obj2);
    this.students[0].oceny.push(this.obj1);
    this.students[0].oceny.push(this.obj3);
  }

  addStudent(student) {
    console.log(student);
    this.students.push(student);
  }
  doEdit(editedStudent: WhichType) {
    console.log(editedStudent);
    this.students[editedStudent.which] = editedStudent.student;
    //call edit method on server
  }
}