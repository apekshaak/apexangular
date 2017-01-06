import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyCompoComponent } from './my-compo/my-compo.component';
import { FlatComponentComponent } from './my-compo/flat-component.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
//import { IntercompcommComponent} from './intercomponent/intercomponent.component';
//import { IntercomponentComponent, IntercompcommComponent }
 //from './intercomponent/intercomponent.component';
//import { ImgpanelComponent } from './intercomponent/imgpanel.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProjectionComponent } from './projection/projection.component';
import { LifecycleindexComponent } from './lifecycle/lifecycleindex.component';
import { ProjectionindexComponent } from './projection/projectionindex.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding.component';
import { DemoexampleComponent } from './databinding/demoexample.component';
import { IntercComponent } from './interc/interc.component';
import { BtnpannelComponent } from './interc/btnpannel.component';
import { ImgpannelComponent } from './interc/imgpannel.component';
import { Projectmod1Component } from './projectmod1/projectmod1.component';
import { HeaderComponent } from './projectmod1/header.component';
import { LeftmenuComponent } from './projectmod1/leftmenu.component';
import { MaincontentComponent } from './projectmod1/maincontent.component';
import { ProjindexComponent } from './projectmod1/projindex.component';
import { DircomComponent } from './dircom/dircom.component';
//import { AttriComponent } from './dircom/attri/attri.component';
import { ResizerDirective } from './dircom/resizer.directive';
import { AttriComponent } from './dircom/attri.component';
import { OwnstrDirective } from './dircom/ownstr.directive';
import { ServiceComponent } from './service/service.component';
import { ServiceindexComponent } from './service/serviceindex.component';
import { ImpcompComponent } from './service/impcomp.component';
//import { Projectmod1Component } from './projectmod1/projectmod1.component';
//import { HeaderComponent } from './header.component';
//import { LeftmenuComponent } from './leftmenu.component';
//import { MaincontentComponent } from './maincontent.component';
//import { ProjectindexComponent } from './projectindex.component';
//import { HeaderComponent } from './projectmod1/header.component';
//import { LeftmenuComponent } from './projectmod1/leftmenu.component';
//import { MaincontentComponent } from './projectmod1/maincontent.component';
//import { ProjectindexComponent } from './projectmod1/projectindex.component';
//import { BtnpanelComponent } from './intercomponent/btnpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompoComponent,
    FlatComponentComponent,
    DatabindingComponent,
    PropertybindingComponent,
    //IntercompcommComponent,
    //ImgpanelComponent,
    LifecycleComponent,
    ProjectionComponent,
    LifecycleindexComponent,
    ProjectionindexComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DemoexampleComponent,
    IntercComponent,
    BtnpannelComponent,
    ImgpannelComponent,
    Projectmod1Component,
    HeaderComponent,
    LeftmenuComponent,
    MaincontentComponent,
    ProjindexComponent,
    DircomComponent,
    //AttriComponent,
    ResizerDirective,
    AttriComponent,
    OwnstrDirective,
    ServiceComponent,
    ServiceindexComponent,
    ImpcompComponent,
   // Projectmod1Component,
    //HeaderComponent,
    //LeftmenuComponent,
    //MaincontentComponent,
    //ProjectindexComponent,
    //HeaderComponent,
    //LeftmenuComponent,
    //MaincontentComponent,
    //ProjectindexComponent,
    //BtnpanelComponent
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
