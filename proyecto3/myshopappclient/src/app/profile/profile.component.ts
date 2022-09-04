import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title: string = "Perfil";

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleLogout() {
    this.auth.logout();
    this.router.navigate(['iniciarsesion'])
  }

}
