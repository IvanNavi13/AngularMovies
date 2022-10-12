import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { IndexComponent } from './index/index.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';
import { MaterialModule } from '../../components/shared/material.module';


@NgModule({
  declarations: [
    IndexComponent,
    NavigationMenuComponent,
    MoviesListComponent,
    DialogDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
