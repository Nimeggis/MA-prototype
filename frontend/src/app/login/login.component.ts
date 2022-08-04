import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AppComponent} from '../app.component';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login form
  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  // constructor
  constructor(private titleService: Title, private appComponent: AppComponent, private formBuilder: FormBuilder, private router: Router) {
    this.titleService.setTitle("IT-REX Prototype - Login");
  }

  // execute function when loading component
  ngOnInit(): void {
  }

  // login function
  login() {
    // set cookie with username
    this.appComponent.setCookie(this.checkoutForm.value.username)
    // check if cookies is student or lecturer (+admin)
    if (this.appComponent.getCookie("user") == "student") {
      this.router.navigate(['/student-home']);
    } else if (this.appComponent.getCookie("user") == "lecturer" || this.appComponent.getCookie("user") == "admin") {
      this.router.navigate(['/lecturer-home']);
    } else {
      alert("Please enter correct user");
    }
  }
}
