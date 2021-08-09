import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toggle:boolean =false;
  constructor(private dbsrvice:DbService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.dbsrvice.singUp();
  }


}
