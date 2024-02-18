import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasModule ),
  },
  // {
  //   path : 'home'
  // }
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'ofertas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
