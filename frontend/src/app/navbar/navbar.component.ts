import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // initialization of variables
  username: string = '';

  // constructor
  constructor(private appComponent: AppComponent, private router: Router) {
  }

  // execute function when loading component
  ngOnInit(): void {
    // set username
    this.username = this.appComponent.getCookie("user");
  }

  // redirect to lecturer home / student home when click on "home" or "courses"
  redirect() {
    if (this.appComponent.getCookie("user") == "lecturer") {
      this.router.navigate(["/lecturer-home"]);
    } else if (this.appComponent.getCookie("user") == "student") {
      this.router.navigate(["/student-home"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
