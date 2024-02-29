import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

@NgModule({
  declarations: [
    Error404PageComponent
  ],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
  ],

})
export class SharedModule { }
