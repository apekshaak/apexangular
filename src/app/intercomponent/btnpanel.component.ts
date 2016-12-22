import { Component, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-btnpanel',
  templateUrl: './btnpanel.component.html',
  styleUrls: ['./btnpanel.component.css']
})
export class BtnpanelComponent {

  @Output() private heroClick : EventEmitter<String>;
  constructor() { 
      this.heroClick = new EventEmitter<String>();


  }

  public onHeroClicked(hero : String)
  {
    let heroLink ='';
    if(hero == 'batMan') heroLink="../../assets/batman.jpeg";
   else if(hero =='spiderMan') heroLink="../../assets/spiderman.jpeg";
   else heroLink="../../assets/hulk.jpeg";
    this.heroClick.emit(heroLink);
   
  }

  

}
