import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InfoproductoComponent } from './infoproducto/infoproducto.component';
import { BuscarComponent } from './buscar/buscar.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckLoginGuard } from './guards/check-login.guard';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'micompras', component: CarritoComponent },
  { path: 'inicio/:id', component: InfoproductoComponent },
  { path: 'buscar', component: BuscarComponent },
  {
    path: 'iniciarsesion',
    component: IngresarComponent,
    canActivate: [CheckLoginGuard]
  },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: '**', redirectTo: 'principal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
