import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-app';
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getData().subscribe(data => console.log(data));
  }
}
