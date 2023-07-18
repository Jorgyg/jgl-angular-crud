import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  index: number = 0;
  character: any; // Reemplaza "any" con el tipo de objeto para tus personajes
  details: any = {};

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.index = params['index'];
      this.databaseService.getAll().subscribe(result => {
        this.character = result;
        this.details = this.character[this.index];
      });
    });
  }
}
