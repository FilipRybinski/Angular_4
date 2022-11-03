import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {
  Index = 0;
  tmp: number;
  @Input()
  ListofStudents;
  constructor() { }

  ngOnInit(): void {
  }
  delete(indexx: number) {

    this.ListofStudents.forEach((element, index) => {
      if (element.index_nr === indexx) {
        this.tmp = index;
        this.ListofStudents.splice(this.tmp, 1);
      }
    });
  }

}
