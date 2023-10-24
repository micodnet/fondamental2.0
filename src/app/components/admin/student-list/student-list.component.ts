import { Component } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { Student } from '../../shared/models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {

  students : Student[]  = []
  login!: string
  email!: string
  motDePasse!: string

  constructor(private _studentService: StudentService){}

  addStudent(){
    this._studentService.addStudent(this.login, this.email, this.motDePasse)
 }
}
