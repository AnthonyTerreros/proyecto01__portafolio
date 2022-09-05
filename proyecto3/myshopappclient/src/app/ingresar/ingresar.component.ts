import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaz/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  form: FormGroup;
  message: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.form = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  handleForm(data: FormGroup) {
    console.log(data)
 
    this.authService.login(data).subscribe((res: any) => {
      if(res) {
        this.router.navigate(['inicio'])
      }
    }, error => {
      if(error.status === 404) {
        this.message = "Usuario No Encontrado!"
      }
      if(error.status === 400) {
        this.message = "Email o Password Mal Ingresados!"
      }
    })

  }

}
