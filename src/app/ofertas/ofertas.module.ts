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
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    CardComponent,
    OfertaPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    OfertImagePipe,
    HeaderComponent,
    SearchItemComponent,
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OfertasModule { }
