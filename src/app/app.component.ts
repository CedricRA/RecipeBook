import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecipeBook';
  selectedMenu = 'recipes';

  onMenuSelected(menu: string){
    this.selectedMenu = menu;
  }
}
