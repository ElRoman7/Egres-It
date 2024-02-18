import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Error404PageComponent
  ],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],

})
export class SharedModule { }
