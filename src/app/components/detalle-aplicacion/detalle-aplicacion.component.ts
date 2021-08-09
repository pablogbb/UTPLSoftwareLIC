import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-detalle-aplicacion',
  templateUrl: './detalle-aplicacion.component.html',
  styleUrls: ['./detalle-aplicacion.component.css']
})
export class DetalleAplicacionComponent implements OnInit {

  id:number = 0;
  app:any;

  constructor(private dbservice:DbService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get("id");
    this.id = parseInt(String(param));
    this.app = this.dbservice.getAplicacion(this.id);
  }

  

}
