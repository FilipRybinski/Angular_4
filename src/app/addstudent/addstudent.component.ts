import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentClass } from 'src/types/student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  Name='';
  Surname='';
  Index=0;
  student;
  @Output()
  EventStudent=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  add(Name:string,Surname:string,Index:number){
    this.student=new StudentClass(Name, Surname, Index);
      this.EventStudent.emit(this.student);
  }

}
