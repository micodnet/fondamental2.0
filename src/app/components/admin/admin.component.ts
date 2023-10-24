import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { Student } from '../shared/models/student.model';
import { Formation } from '../shared/models/formation.model';
import { Course } from '../shared/models/cours.model';
import { StudentService } from '../shared/services/student.service';
import { FormationService } from '../shared/services/formation.service';
import { CoursService } from '../shared/services/cours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  showUsersList: boolean = false;
  showStudentsList: boolean = false;
  showFormationsList: boolean = false;
  showCoursesList: boolean = false;

  showUsers() {
    this.showUsersList = true;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
  }

  showStudents() {
    this.showUsersList = false;
    this.showStudentsList = true;
    this.showFormationsList = false;
    this.showCoursesList = false;
  }

  showFormations() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = true;
    this.showCoursesList = false;
  }

  showCourses() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = true;
  }

  users: User[] = [] 
  nom! : string
  prenom! : string
  dateNaissance! : Date
  login! : string
  email! : string
  motDePasse! : string

  students: Student[] = []
  
  formations: Formation[] = []
    name!: string
    description!: string
    dateDebut!: Date
    duree!: Date
    preRequis!: string

  courses: Course[] = []
  titre!: string
  descriptioncours!: string

  constructor(private _userService: UserService,
              private _studentService: StudentService,
              private _formationService: FormationService,
              private _courseService: CoursService,
              private router: Router
    ){}
    navigateToRegisterComponent() {
      this.router.navigate(['authentification/register']);
    }

    navigateStudentList() {
      this.router.navigate(['studentlist']);
    }

    navigateFormation() {
      this.router.navigate(['formation']);
    }

    navigateCours() {
      this.router.navigate(['cours']);
    }

  getUser(){this.showUsers()
    this._userService.getUser().subscribe((liste: User[])=> console.log(this.users = liste))
  }

  getStudent(){this.showStudents()
    this._studentService.getStudent().subscribe((liste1: Student[])=> console.log(this.students = liste1))
  }

  getFormation(){this.showFormations()
    this._formationService.getFormation().subscribe((liste2: Formation[])=> console.log(this.formations = liste2))
  }

  getCourse(){this.showCourses()
    this._courseService.getCourse().subscribe((liste3: Course[])=> console.log(this.courses = liste3))
  }

}
