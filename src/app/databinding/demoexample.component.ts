import { Component} from '@angular/core';

@Component({
  selector: 'app-demoexample',
  templateUrl: './demoexample.component.html',
  styleUrls: ['./demoexample.component.css']
})
export class DemoexampleComponent {

  private clickedCartoon : String;
  
  
   public onCartoonClicked(cartoon : String) {
    if(cartoon == 'mickey') 
    this.clickedCartoon = "../../assets/mickey.png";
    else if(cartoon == 'goofy') 
    this.clickedCartoon = "../../assets/goofn.gif";
   else
    this.clickedCartoon = "../../assets/tj.jpeg";
//console.log('hhhh');
  }

}
