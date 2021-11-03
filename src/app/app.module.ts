import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyConComponent } from './my-con/my-con.component';
import { TopBarComponent } from './my-con/top-bar/top-bar.component';
import { HeaderComponent } from './my-con/header/header.component';
import { LeftpanComponent } from './my-con/leftpan/leftpan.component';
import { RightpanComponent } from './my-con/rightpan/rightpan.component';
import { InterpolationComponent } from './my-con/Data Binding/interpolation/interpolation.component';
import { PorpBindingComponent } from './my-con/Data Binding/porp-binding/porp-binding.component';
import { NgBindingComponent } from './my-con/Data Binding/ng-binding/ng-binding.component';
import { NgforComponent } from './my-con/ngfor/ngfor.component';
import { EventBindComponent } from './my-con/Data Binding/event-bind/event-bind.component';
import { TwoWayBindComponent } from './my-con/Data Binding/two-way-bind/two-way-bind.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngx -bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MyBootstrapComponent } from './my-con/my-bootstrap/my-bootstrap.component';
import { NgIfElseComponent } from './my-con/ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './my-con/ng-switch/ng-switch.component';
import { PushSpliceComponent } from './my-con/ngfor/push-splice/push-splice.component';
import { RoutingPgComponent } from './my-con/routing-pg/routing-pg.component';
import { HomePgComponent } from './my-con/routing-pg/home-pg/home-pg.component';
import { AboutusPgComponent } from './my-con/routing-pg/aboutus-pg/aboutus-pg.component';
import { ProductsPgComponent } from './my-con/routing-pg/products-pg/products-pg.component';
import { ContactPgComponent } from './my-con/routing-pg/contact-pg/contact-pg.component';
import { LoginPgComponent } from './my-con/routing-pg/login-pg/login-pg.component';
import { Page404Component } from './my-con/routing-pg/page404/page404.component';
import { LaptopComponent } from './my-con/routing-pg/products-pg/laptop/laptop.component';
import { MobileComponent } from './my-con/routing-pg/products-pg/mobile/mobile.component';
import { TabComponent } from './my-con/routing-pg/products-pg/tab/tab.component';
import { CamaraComponent } from './my-con/routing-pg/products-pg/camara/camara.component';
import { CardComponent } from './my-con/routing-pg/contact-pg/card/card.component';
import { ByproductsComponent } from './my-con/routing-pg/byproducts/byproducts.component';
import { ByproChildComponent } from './my-con/routing-pg/byproducts/bypro-child/bypro-child.component';
import { MyserviceService } from './my-con/Service/myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SubjectPgComponent } from './my-con/routing-pg/home-pg/subject-pg/subject-pg.component';
import { OtherComponent } from './my-con/routing-pg/other/other.component';
import { OtherCom1Component } from './my-con/routing-pg/other/other-com1/other-com1.component';
import { TestdireactiveDirective } from './my-con/testdireactive/testdireactive.directive';
import { DropdownDirective } from './my-con/testDireactive/dropdown.directive';
import { MypipePipe } from './my-con/appPipes/mypipe.pipe';
import { FilterPipe } from './my-con/appPipes/filter.pipe';



const appRoutes:Routes = [
  // {path: '' , redirectTo:'login' , pathMatch:'full'},
  {path: 'home' , component:HomePgComponent},
  {path: 'login' , component:LoginPgComponent},
  {path: 'about' , component:AboutusPgComponent},
  {path: 'products' ,component:ProductsPgComponent, 
    children:[
      {path: 'laptop', component:LaptopComponent},
      {path: 'mobile', component:MobileComponent},
      {path: 'tab', component:TabComponent},
      {path: 'camara', component:CamaraComponent},
    ]
  },
  {path: 'contactus' , component:ContactPgComponent},
  {path: 'byproduct' , component:ByproductsComponent},
  {path: 'other' , component:OtherComponent},
  {path: '**' , component:Page404Component},
  
]


@NgModule({
  declarations: [
    AppComponent,
    MyConComponent,
    TopBarComponent,
    HeaderComponent,
    LeftpanComponent,
    RightpanComponent,
    InterpolationComponent,
    PorpBindingComponent,
    NgBindingComponent,
    NgforComponent,
    EventBindComponent,
    TwoWayBindComponent,
    MyBootstrapComponent,
    NgIfElseComponent,
    NgSwitchComponent,
    PushSpliceComponent,
    RoutingPgComponent,
    HomePgComponent,
    AboutusPgComponent,
    ProductsPgComponent,
    ContactPgComponent,
    LoginPgComponent,
    Page404Component,
    LaptopComponent,
    MobileComponent,
    TabComponent,
    CamaraComponent,
    CardComponent,
    ByproductsComponent,
    ByproChildComponent,
    SubjectPgComponent,
    OtherComponent,
    OtherCom1Component,
    TestdireactiveDirective,
    DropdownDirective,
    MypipePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    MyserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
