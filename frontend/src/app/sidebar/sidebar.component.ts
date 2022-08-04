import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // initialization of variables
  username: string = '';
  devArea: string = 'none';

  // constructor
  constructor(private appComponent: AppComponent) {
  }

  // execute function when loading component
  ngOnInit(): void {
    this.username = this.appComponent.getCookie("user");
    // check user and activate admin settings
    if (this.appComponent.getCookie("user") == "admin") {
      this.devArea = 'flex';
    }
  }

}
