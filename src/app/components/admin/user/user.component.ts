import { Component } from '@angular/core';
import { Formation } from '../../shared/models/formation.model';
import { Router } from '@angular/router';
import { Course } from '../../shared/models/cours.model';
import { PdfCours } from '../../shared/models/pdf-cours.model';
import { CoursService } from '../../shared/services/cours.service';
import { FormationService } from '../../shared/services/formation.service';
import { PdfService } from '../../shared/services/pdf.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
    template: `<nu-monaco-editor [(ngModel)]="value" [options]="editorOptions"></nu-monaco-editor>`,
})
export class UserComponent {

  value: string = 'const a = 1;';
  editorOptions = { theme: 'vs-dark', language: 'typescript' };

  showFormationsList: boolean = false;
  showCoursesList: boolean = false;
  showPdfList: boolean = false;

  showFormations() {
    this.showFormationsList = true;
    this.showCoursesList = false;
    this.showPdfList = false;
  }

  showCourses() {
    this.showFormationsList = false;
    this.showCoursesList = true;
    this.showPdfList = false;
  }

  showPdf() {
    this.showFormationsList = false;
    this.showCoursesList = false;
    this.showPdfList = true;
  }
  
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

  constructor(
              private _formationService: FormationService,
              private _courseService: CoursService,
              private _pdfService: PdfService,
              private router: Router
    ){}

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
