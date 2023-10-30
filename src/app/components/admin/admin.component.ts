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
import { PdfCours } from '../shared/models/pdf-cours.model';
import { PdfService } from '../shared/services/pdf.service';
import { Observable, of, catchError } from 'rxjs';

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
  showPdfList: boolean = false;

  showUserById: boolean = false;
  showStudentById: boolean = false;
  showFormationById: boolean = false;
  showCourseById: boolean = false;
  showPdfCouseById: boolean = false;

  showUsers() {
    this.showUsersList = true;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showUserId() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = true;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showStudents() {
    this.showUsersList = false;
    this.showStudentsList = true;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showStudentId() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = true;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showFormations() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = true;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showFormationId() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = true;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showCourses() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = true;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showCourseId() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = true;
    this.showPdfCouseById = false;
  }

  showPdf() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = true;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = false;
  }

  showPdfId() {
    this.showUsersList = false;
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;

    this.showUserById = false;
    this.showStudentById = false;
    this.showFormationById = false;
    this.showCourseById = false;
    this.showPdfCouseById = true;
  }

  searchUserId!: number
  searchStudentId!: number
  searchFormationId!: number
  searchCourseId!: number
  searchPdfId!: number
  userId!: number

  us!: User
  st!: Student
  fo!: Formation
  co!: Course
  pf!: PdfCours

  user$!: Observable<User | null>;
  student$!: Observable<Student | null>;
  formation$!: Observable<Formation | null>;
  course$!: Observable<Course | null>;
  pdfCourse$!: Observable<PdfCours | null>;


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

  pdfs: PdfCours[] = []
    title!: string
    content!: string
    courseId!: number 

  constructor(private _userService: UserService,
              private _studentService: StudentService,
              private _formationService: FormationService,
              private _courseService: CoursService,
              private _pdfService: PdfService,
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

    navigatePdf() {
      this.router.navigate(['pdf']);
    }

  getUser(){this.showUsers()
    this._userService.getUser().subscribe((liste: User[])=> console.log(this.users = liste))
  }

  // searchUserById(userId: number): User | null {
  //   let userTrouver = this.users.find(us => us.id === userId);
  //   return userTrouver || null; // Renvoie l'utilisateur s'il est trouvé, sinon null
  // }
  
  // searchUser() {this.showUserId()
  //   // Récupérer l'ID saisi par l'utilisateur (par exemple, en utilisant this.searchUserId)
  //   let userId = this.searchUserId; 
  
  //   let user = this.searchUserById(userId);
  
  //   if (user != null) {
  //     this.user$ = of(user); // Assurez-vous que user$ est correctement initialisé
  //     console.log('Utilisateur trouvé :', user);
  //   } else {
  //     console.log('Utilisateur non trouvé.');
  //   }
  // }

  //  searchUserById(userId: number): User | null {
  //  let User = this.users.find(User => User.id === userId);
  //  return User || null; // Renvoie l'utilisateur s'il est trouvé, sinon null
  //  }
  //  searchUser() {
  //    let userId = this.searchUserId; // Récupère l'ID saisi par l'utilisateur
  //    let user = this.searchUserById(userId);
  
  //    if (user) {
  //      let user = this.user$
       
  //      this.showUserId()
  //      console.log('Utilisateur trouvé :', user);
  //    } else {
  //    console.log('Utilisateur non trouvé.');
  //    }
  //  }

  // searchUserById() {
  //   if (this.searchUserId !== null) {
  //     const foundUser = this.users.find(user => user.id === this.searchUserId);
  //     this.user$ = of(foundUser || null);
  //   } else {
  //     this.user$ = of(null);
  //   }
  // }

  
//   getUserById(userId: number): Observable<User | null> {this.showUserId()
    
//     const us = this.users.find((us) => us.id === userId);
//     this.user$ = this._userService.getUserById(userId);
//     if (us) {
//         return of(us);
//     } 
//     else {
//         return this._userService.getUserById(userId).pipe(
//             catchError((error) => {
//                 console.error('Erreur lors de la récupération de l\'utilisateur:', error);
//                 return of(null); 
//             })
//         );
//     }
// }
  // recupId(){
  //   let userId = this.searchUserId;
  //   let user = this.getUserById(userId)
  //   if (user) {
  //    let user = this.user$
  //          //return this.user$
  //    this.showUserId()
  //     console.log('Utilisateur trouvé :', user);
  //    } else {
  //     console.log('Utilisateur non trouvé.');
  //    }
  // }
  
 getUserById(userId: number) {this.showUserId()
    userId = this.searchUserId
     this._userService.getUserById(userId).subscribe((user: User) => console.log(this.us = user) )
    
   }

  getStudent(){this.showStudents()
    this._studentService.getStudent().subscribe((liste1: Student[])=> console.log(this.students = liste1))
  }

  getStudentById(studentId: number) {this.showStudentId()
    studentId = this.searchStudentId
    this._studentService.getStudentById(studentId).subscribe((student: Student) =>  console.log(this.st = student))
  }

  getFormation(){this.showFormations()
    this._formationService.getFormation().subscribe((liste2: Formation[])=> console.log(this.formations = liste2))
  }

  getFormationById(formationId: number) {this.showFormationId()
    formationId = this.searchFormationId
    this._formationService.getFormationById(formationId).subscribe((formation: Formation)=> console.log(this.fo = formation))
  }

  getCourse(){this.showCourses()
    this._courseService.getCourse().subscribe((liste3: Course[])=> console.log(this.courses = liste3))
  }

  getCourseById(courseId: number){this.showCourseId()
    courseId = this.searchCourseId
    this._courseService.getCourseById(courseId).subscribe((cours: Course)=> console.log(this.co = cours))
  }

  getPdf(){this.showPdf()
    this._pdfService.getPdf().subscribe((liste4: PdfCours[])=> console.log(this.pdfs = liste4))
  }

  getPdfById(pdfCourseId: number){this.showPdfId()
    pdfCourseId = this.searchPdfId
    this._pdfService.getPdfById(pdfCourseId).subscribe((pdfCours: PdfCours)=> console.log(this.pf = pdfCours))
  }

}
