import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = ""

  getUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value
  }
};
