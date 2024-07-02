import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router, private appService: AppService) {
    const username = localStorage.getItem('username');
    if(username) {
      this.username = username;
    }
  }
  signIn() {
    this.appService.getUserByUsername(this.username).subscribe({
      next: (response) => {
        localStorage.setItem('firstname', this.username);
        localStorage.setItem('lastname', this.username);
        localStorage.setItem('username', this.username);
        this.router.navigate(['/homepage']);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
