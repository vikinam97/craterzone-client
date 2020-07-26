import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private router: Router) { }

  userName: String = "";

  ngOnInit() {
  }

  login() {
    console.log(this.userName);
    this._userService.login(this.userName)
      .subscribe(response => {
        if(!response.token) return;
        localStorage.setItem("session", response.token);
        this.router.navigate(['/map']);
        console.log("response", response);
       }, error => {
         console.log("error", error);
       });
  }
}
