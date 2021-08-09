import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAplicacionComponent } from './components/detalle-aplicacion/detalle-aplicacion.component';
import { DetalleLicenciaComponent } from './components/detalle-licencia/detalle-licencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavegadorComponent } from './components/navegador/navegador.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'navegador',component:NavegadorComponent},
    {path:'aplicacion/:id',component:DetalleAplicacionComponent},
    {path:'licencia/:id',component:DetalleLicenciaComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
