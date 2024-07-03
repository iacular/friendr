import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  loading: boolean = false;

  constructor(private router: Router, private appService: AppService) {
    const username = localStorage.getItem('username');
    if(username) {
      this.username = username;
    }
  }
  signIn() {
    this.loading = true;
    this.appService
      .getUserByUsername(this.username)
      .pipe(first())
      .subscribe({
      next: (response) => {
        this.loading = false; // de implementat un loading spinner cand loading este pe true
        console.log(response);

        localStorage.setItem('firstname', this.username);
        localStorage.setItem('lastname', this.username);
        localStorage.setItem('username', this.username);
        this.router.navigate(['/homepage']);
      },
      error: (error) => {
        console.error(error);
        alert('User not found');
      }
    });
  }
}
