import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  usuarios:any[]=[
    {username:'admin',password:'1234'},
    {username:'root', password:'root'}
  ];

  aplicaciones:any[]=[
    {
      id:1,
      img:'https://logos-marcas.com/wp-content/uploads/2020/11/Adobe-Photoshop-Logotipo-2019-2020.jpg',
      nombre:'Photoshop',
      anio:2021,
      descripcion:'photoshop es una aplicacion para diseño grafico',
  licencia:{
    nombre: 'GPL',
    descripcion: 'Licencia de software Libre'
  }, empresa:{  
    nombre: 'Adobe',
    img:'https://www.xn--nosotros-los-diseadores-8hc.com/wp-content/uploads/2020/06/nueva-imagen-logo-adobe-2020.jpg',
    web:'https://www.adobe.com/la/products/photoshop/free-trial-download.html'
  }} 
  ];

  licencias:any[]=[
    {
      id:1,
      nombre: 'MPL',
      subtitulo: 'Este tipo de licencias de Software libre son muy parecidas a las BSD',
      descripcion:'Este tipo de licencias de Software libre son muy parecidas a las BSD',
      web:''
    },
    {
      id:2,
      nombre: 'BSD',
      subtitulo: 'La licencia BSD cubre las distribuciones de software de Berkeley Software Distribution, además de otros programas. ',
      descripcion:'Este tipo de licencias de Software libre son muy parecidas a las BSD',
      web:''
    } 
  ];

  user:any;

  constructor(private router:Router) { 
    if(!this.user){
      this.router.navigate(['/login']);
    }
  }

  login(user:any) {
    let u = this.usuarios.find(x => x.username == user.username && x.password == user.password);
    return u;
  }

  singUp(){
    this.user = null;
    this.router.navigate(['/login']);
  }

  getAplicaciones(){
    return this.aplicaciones;
  }

  getLicencias(){
    return this.licencias;
  }

  getAplicacion(id:number){
    return this.aplicaciones.find(x => x.id == id);
  }

  getLicencia(id:number){
    return this.licencias.find(x => x.id == id);
  }
}