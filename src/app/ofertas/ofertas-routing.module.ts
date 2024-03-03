import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { OfertaPageComponent } from './pages/oferta-page/oferta-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'list', component: ListPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: ':id', component: OfertaPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
