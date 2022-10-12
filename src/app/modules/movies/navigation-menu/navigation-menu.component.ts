import { Component, Input} from '@angular/core';
import { MovieCategory } from '../../../models/movie-category.model';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  genres : MovieCategory[] = [];

  @Input()
  set data(param: MovieCategory[]){
    this.genres =param;
  }

}
