import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../interfaces/oferta.interface';
import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit{

  public ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasService){}

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .subscribe(ofertas => this.ofertas = ofertas);
  }

}
