import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OfertasService } from '../../services/ofertas.service';
import { Oferta } from '../../interfaces/oferta.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  public searchInput = new FormControl('');
  public ofertas: Oferta[] = [];
  public selectedOferta ?: Oferta;

  constructor(private ofertasService : OfertasService, private router: Router){}


  searchOferta(){
    const value:string = this.searchInput.value || '';
    this.ofertasService.getSuggestions(value)
    .subscribe(ofertas => this.ofertas = ofertas);
    console.log(this.ofertas);

  }

  onSelectedOption(event : MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this.selectedOferta = undefined
      return;
    }
    const oferta: Oferta = event.option.value;
    this.searchInput.setValue(oferta.titulo);
    this.selectedOferta = oferta;
    this.router.navigateByUrl(`ofertas/${oferta.id}`)

  }

}
