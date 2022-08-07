import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InfoproductoComponent } from './infoproducto/infoproducto.component';


const routes: Routes = [
  { path: "principal", component: PrincipalComponent },
  { path: "inicio", component: HomeComponent },
  { path: "micompras", component: CarritoComponent },
  { path: "infoproducto", component: InfoproductoComponent },
  { path: "**", redirectTo: "principal" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
