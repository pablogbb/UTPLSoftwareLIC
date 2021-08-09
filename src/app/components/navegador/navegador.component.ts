import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  apps:any[]=[];
  licencias:any[]=[];

  constructor(private dbservice:DbService) { }

  ngOnInit(): void {
    this.apps = this.dbservice.getAplicaciones();
    this.licencias = this.dbservice.getLicencias();
  }
}