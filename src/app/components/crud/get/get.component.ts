import { Component } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent {

  listUser! : User[]
  constructor(
    private _userService : UserService,
    private _router : Router
    ){}

  ngOnInit() {
    this.listUser = this._userService.listUser
  }

  delete(index : number) {
    this._userService.deleteUser(index)
  }

  update(index : number) {
    this._router.navigate(["update", index])
  }

}
