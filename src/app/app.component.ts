import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  firstName = 'amr' || 'Sign in';
  // title = 'Voyager!';

  toggleLogIn(e) {
    this.loggedIn = !this.loggedIn;
  }
  
}
