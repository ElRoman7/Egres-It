import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../interfaces/oferta.interface';
import { OfertasService } from '../../services/ofertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-oferta-page',
  templateUrl: './oferta-page.component.html',
  styleUrls: ['./oferta-page.component.scss']
})
export class OfertaPageComponent implements OnInit{
  public oferta ?: Oferta;

  constructor(
    private ofertasService: OfertasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.ofertasService.getOfertaById(id) ),
      ).subscribe(oferta =>{
        if(!oferta) return this.router.navigate(['ofertas/list']);
        this.oferta = oferta;
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('ofertas/list');
  }

}
