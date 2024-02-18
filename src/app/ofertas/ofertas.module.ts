import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { CardComponent } from './components/card/card.component';
import { OfertaPageComponent } from './pages/oferta-page/oferta-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { OfertImagePipe } from './pipes/oferta-image.pipe';


@NgModule({
  declarations: [
    CardComponent,
    OfertaPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    OfertImagePipe
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class OfertasModule { }
