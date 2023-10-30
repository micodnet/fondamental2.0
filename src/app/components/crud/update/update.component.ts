import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { StudentService } from '../../shared/services/student.service';
import { FormationService } from '../../shared/services/formation.service';
import { CoursService } from '../../shared/services/cours.service';
import { PdfService } from '../../shared/services/pdf.service';
import { User } from '../../shared/models/user.model';
import { Student } from '../../shared/models/student.model';
import { Formation } from '../../shared/models/formation.model';
import { Course } from '../../shared/models/cours.model';
import { PdfCours } from '../../shared/models/pdf-cours.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  currentUser!: User
  currentStudent!: Student
  currentFormation!: Formation
  currentCourse!: Course
  currentPdf!: PdfCours

  myForm! : FormGroup
  currentId! : number

  constructor(
    private _builder: FormBuilder,
    private _userService: UserService,
    private _studentService: StudentService,
    private _formationSrvice: FormationService,
    private _courseService: CoursService,
    private _pdfService: PdfService,
    private _ar: ActivatedRoute,
    private _router: Router 
  ) {}

  ngOnInit() {
    this.currentId = this._ar.snapshot.params["id"]
    this.currentUser = this._userService.getByIndex(this.currentId)

    this.myForm = this._builder.group({
      name : [this.currentUser.firstName, Validators.required],
      email : [this.currentUser.email, Validators.email],
      birthdate : [null, this.ageValidator()],
      favoriteTVShow : this._builder.array([])
    })

    this.myForm.controls["birthDate"].patchValue(new Date(this.currentUser.birthDate))

    // this.currentUser.favoriteTVShow?.forEach(s => {
    //   this.getShowArray().push(new FormControl(s, Validators.required))
    // })
  }

  getShowArray() : FormArray {
    return this.myForm.get('favoriteTVShow') as FormArray
  }

  addTvShow() {
    this.getShowArray().push(new FormControl(null, Validators.required))
  }

  removeTvShow(index : number) {
    this.getShowArray().removeAt(index)
  }

  // saveUser() {
  //   this._userService.updateUser(this.currentId, this.myForm.value)
  //   this._router.navigate(["user-list"]);
  // }

  ageValidator() : ValidatorFn {
    return (control : AbstractControl) => {
      if(control.value == null) return null
      let currentDate : Date = new Date()
      let birthDate : Date = new Date(control.value)
      if(currentDate.getFullYear() - birthDate.getFullYear() >= 13)
        return null

      return {dateError : 'Trop jeune, age minimum : 13ans'}
    }
  }

}
