import { Component } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { FormationService } from '../../shared/services/formation.service';
import { CoursService } from '../../shared/services/cours.service';
import { PdfService } from '../../shared/services/pdf.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  currentUser! : User
  user$!: Observable<User | null>;

  constructor(private _userService: UserService,
              private _studentSrvice: StudentService,
              private _formationService: FormationService,
              private _courseServicfe: CoursService,
              private _pdfCourseService: PdfService,
              private _ar : ActivatedRoute
    ){}

    ngOnInit() {
      let id = this._ar.snapshot.params["id"]
      this.currentUser = this._userService.getByIndex(id)
    }
}
