import { Component} from '@angular/core';
import { Menu } from './menu';
@Component({
  selector: 'app-projindex',
  templateUrl: './projindex.component.html',
  styleUrls: ['./projindex.component.css']
})
export class ProjindexComponent
 {

   private menu: Menu;
  
  public onMenuReceived(menu : Menu)
  {
    this.menu = menu;
    console.log('Index Menu Received is ${menu.getName()}');
  }
}
