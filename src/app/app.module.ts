import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyCompoComponent } from './my-compo/my-compo.component';
import { FlatComponentComponent } from './my-compo/flat-component.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { IntercomponentComponent} from './intercomponent/intercomponent.component';
//import { IntercomponentComponent, IntercompcommComponent }
 //from './intercomponent/intercomponent.component';
import { ImgpanelComponent } from './intercomponent/imgpanel.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProjectionComponent } from './projection/projection.component';
import { LifecycleindexComponent } from './lifecycle/lifecycleindex.component';
import { ProjectionindexComponent } from './projection/projectionindex.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding.component';
import { DemoexampleComponent } from './databinding/demoexample.component';
import { BtnpanelComponent } from './intercomponent/btnpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompoComponent,
    FlatComponentComponent,
    DatabindingComponent,
    PropertybindingComponent,
    IntercomponentComponent,
    ImgpanelComponent,
    LifecycleComponent,
    ProjectionComponent,
    LifecycleindexComponent,
    ProjectionindexComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DemoexampleComponent,
    BtnpanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
