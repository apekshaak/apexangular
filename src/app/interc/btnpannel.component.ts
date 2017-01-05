import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-btnpannel',
  templateUrl: './btnpannel.component.html',
  styleUrls: ['./btnpannel.component.css']
})
export class BtnpannelComponent {
  
@Output() private heroClick : EventEmitter<String>;

constructor() {
  this.heroClick = new EventEmitter<String>();

}

  public onHeroClick(hero : String)
  {

      let heroLink = '';
      if(hero == 'cyndrella') 
      heroLink = "../../assets/cyndrella.jpeg";
        else if(hero == 'ferry') 
      heroLink = "../../assets/ferry.jpeg";
        else  heroLink = "../../assets/barbie.png";
        
      this.heroClick.emit(heroLink);
  }

}
