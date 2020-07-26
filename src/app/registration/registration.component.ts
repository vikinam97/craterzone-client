import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/User.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  UserData: any = {};
  states: any = [];
  cities:any = [];
  constructor(private User: UserService) { }
  ngOnInit() {
  }

  registerUser(form) {
    this.User.signup(this.UserData).subscribe((response) => {
      console.log("user registration response", response)
    })
  }
}
