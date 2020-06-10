import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
  }
  
  navigate_home() {
    this.router.navigate(['/']);
  }

  navigate_projects() {
    this.router.navigate(['/projects']);
  }

  navigate_contact() {
    this.router.navigate(['/contact']);
  }
}
