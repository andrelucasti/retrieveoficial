import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { MaterializeModule } from 'ng2-materialize';
 
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import { StreamMidiaComponent } from './stream-midia/stream-midia.component';
import { MidiaComponent } from './midia/midia.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TourDatesComponent } from './tour-dates/tour-dates.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ContatoHeadComponent } from './contato-head/contato-head.component';
import { SocialMidiaComponent } from './social-midia/social-midia.component';
import { TourDatesService } from './tour-dates/tour-dates.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    HomeComponent,
    StreamMidiaComponent,
    MidiaComponent,
    InstagramComponent, 
    TourDatesComponent,
    ContatoFormComponent,
    ContatoHeadComponent,
    SocialMidiaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [TourDatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
