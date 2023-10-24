import { Component } from '@angular/core';
import { Formation } from '../../shared/models/formation.model';
import { FormationService } from '../../shared/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  formationlist: Formation[] = []
    name!: string
    description!: string
    dateDebut!: Date
    duree!: Date
    preRequis!: string


  constructor(private _formationService: FormationService){}

  addFormation(){
    this._formationService.addFormation(this.name, this.description, this.dateDebut, this.duree, this.preRequis)
 }
}
