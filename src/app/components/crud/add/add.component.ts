import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  myForm! : FormGroup

  constructor(private builder : FormBuilder){}

  //se d'office déclenche au chargement du composant
  // ngOnInit() {
  //   this.myForm = this.builder.group({
  //     //chaque control propose de lui affecter une valeur par défaut, un/des validators, validateur asynchrone
  //     titre : [
  //       "Mon titre",
  //       [Validators.required, Validators.maxLength(50)]
  //     ],
  //     anneeSortie : [null, [Validators.required, Validators.min(1960)]],
  //     genre : [null, this.verifLongueurMin(3)]
  //   })
  // }

  // getPersonne() : FormArray {
  //   return this.myForm.get("personne") as FormArray
  // }

  // ajouterPersonne() {
  //   this.getPersonne().push(new FormControl("", Validators.required))
  // }

  // validerFormulaire() {
  //   //let monFilm : Film = this.myForm.value
  //   //console.log(monFilm)
  // }

  // verifLongueurMin(min : number) : ValidatorFn {
  //   return (control : AbstractControl) => {
  //     if(control.value == null) return null
  //     if(control.value.length >= min) return null
  //     return {myError : 'Le champ doit avoir une longueur minimum de ' + min}
  //   }
  // }

}
