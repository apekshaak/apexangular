import { Component} from '@angular/core';

@Component({
  selector: 'app-interc',
  templateUrl: './interc.component.html',
  styleUrls: ['./interc.component.css']
})
export class IntercComponent {

private heroLink : String;

constructor() { }

    public onHeroClickInParent(heroLink : String)
    {
        console.log(' Hero Link ${heroLink}');

        this.heroLink = heroLink;
    }
}
