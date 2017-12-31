import { NgModule, Component, OnInit } from '@angular/core';
import { TourDatesService } from './tour-dates.service';
import { Event } from './event.modals'



@Component({
  selector: 'rt-tour-dates',
  templateUrl: './tour-dates.component.html',
  styleUrls: ['./tour-dates.component.css']
  
})
export class TourDatesComponent implements OnInit {

  constructor(private tourDateService:TourDatesService) { }

  events:Event[]
  
  ngOnInit() {
    this.tourDateService.getEvents().subscribe(pEvents => {
      console.log(pEvents)

      this.events = pEvents;

      for(var i=0; i < this.events.length; i++){
        console.log(this.events[i]);
        
      }

      
    });
  }


  
}
