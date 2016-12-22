import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imgpanel',
  templateUrl: './imgpanel.component.html',
  styleUrls: ['./imgpanel.component.css']
})
export class ImgpanelComponent {

  @Input() private hero : String;

}
