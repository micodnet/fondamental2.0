import { Component } from '@angular/core';
import { Student } from '../../shared/models/student.model';
import { Formation } from '../../shared/models/formation.model';
import { Course } from '../../shared/models/cours.model';
import { PdfCours } from '../../shared/models/pdf-cours.model';
import { StudentService } from '../../shared/services/student.service';
import { Router } from '@angular/router';
import { PdfService } from '../../shared/services/pdf.service';
import { CoursService } from '../../shared/services/cours.service';
import { FormationService } from '../../shared/services/formation.service';

@Component({
  selector: 'app-modo',
  templateUrl: './modo.component.html',
  styleUrls: ['./modo.component.scss']
})
export class ModoComponent {

  showStudentsList: boolean = false;
  showFormationsList: boolean = false;
  showCoursesList: boolean = false;
  showPdfList: boolean = false;

  showStudents() {
    this.showStudentsList = true;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = false;
  }

  showFormations() {
    this.showStudentsList = false;
    this.showFormationsList = true;
    this.showCoursesList = false;
    this.showPdfList = false;
  }

  showCourses() {
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = true;
    this.showPdfList = false;
  }

  showPdf() {
    this.showStudentsList = false;
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = true;
  }

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

  constructor(private _studentService: StudentService,
              private _formationService: FormationService,
              private _courseService: CoursService,
              private _pdfService: PdfService,
              private router: Router
    ){}

    navigateCours() {
      this.router.navigate(['cours']);
    }

    navigatePdf() {
      this.router.navigate(['pdf']);
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

  getPdf(){this.showPdf()
    this._pdfService.getPdf().subscribe((liste4: PdfCours[])=> console.log(this.pdfs = liste4))
  }

}
