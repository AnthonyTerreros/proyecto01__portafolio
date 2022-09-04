import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  form: FormGroup;
  estado: Boolean = false


  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  acceptTerms() {
    this.estado = !this.estado;
  }

  handleRegister(data: FormGroup) {
    console.log(data)
  }

}
