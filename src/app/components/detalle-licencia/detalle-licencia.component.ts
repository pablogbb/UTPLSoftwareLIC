import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-detalle-licencia',
  templateUrl: './detalle-licencia.component.html',
  styleUrls: ['./detalle-licencia.component.css']
})
export class DetalleLicenciaComponent implements OnInit {

  id:number = 0;
  licencia:any;

  constructor(private dbservice:DbService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get("id");
    this.id = parseInt(String(param));
    this.licencia = this.dbservice.getLicencia(this.id);
  }



}
