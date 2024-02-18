import { Component, Input, OnInit } from '@angular/core';
import { Oferta } from '../../interfaces/oferta.interface';

@Component({
  selector: 'ofertas-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input()
  public oferta!:Oferta;

  ngOnInit(): void {
    if(!this.oferta) throw Error('Oferta Property is required')
  }

}
