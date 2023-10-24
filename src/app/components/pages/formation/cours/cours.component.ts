import { Component } from '@angular/core';
import { Course } from 'src/app/components/shared/models/cours.model';
import { CoursService } from 'src/app/components/shared/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent {

  courses : Course[] = []
    titre!: string
    description!: string
    formationId!: number

  constructor(private _coursService: CoursService){}

  
  addCourse(){
    this._coursService.addCourse(this.titre, this.description, this.formationId)
 }
}
