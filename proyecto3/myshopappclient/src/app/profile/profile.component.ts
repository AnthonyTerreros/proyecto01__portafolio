import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserProfile } from '../interfaz/user';

const helper = new JwtHelperService();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title: string = "Perfil";

  token: any = localStorage.getItem('token');

  user: UserProfile;

  constructor(private auth: AuthService, private router: Router) {
    const decodedToken = helper.decodeToken(this.token);
    this.user = decodedToken.user as UserProfile;
   }

  ngOnInit(): void {
    
  }

  handleLogout() {
    this.auth.logout();
    this.router.navigate(['iniciarsesion'])
  }

}
