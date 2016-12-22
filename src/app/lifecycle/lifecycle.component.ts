
import { Component, OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit
  ,AfterViewInit,AfterViewChecked,OnDestroy,SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges,OnInit,DoCheck,AfterContentChecked,
AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {

    @Input() private ipDt : string;
    private ChangedName : string;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - inputChanged`);
  }
  
  ngOnInit()
  {
    console.log('ngOnInit');
  }

  ngDoCheck()
  {
    console.log('ngDoCheck');
  }

  ngAfterContentInit()
  {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit()
  {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked');
  }
  
  ngOnDestroy() 
  {
    console.log('ngOnDestroy');
  }

  public Clicked(ChangedName : string)
  {
    this.ChangedName= ChangedName;
  }
  
}
