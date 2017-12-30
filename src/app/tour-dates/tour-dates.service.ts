import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { Event } from './event.modals';

@Injectable()
export class TourDatesService {

  constructor(private http: Http) { }

  private URL_EVENT = this.getUrlEvent(new Date(2018,11,30), new Date(2017,1,1));

  getEvents(): Observable<Event[]>{

    return this.http.get(this.URL_EVENT).map(response => response.json());
  }


  private getUrlEvent(pEndDate:Date, pBeginDate:Date = new Date()):string{
    let beginMonth;
    let beginDay;
    let endMonth;
    let endDay;

    if(pEndDate.getDate().toString().length <=1){
      endDay = `0${pEndDate.getDate()}`;
    } else {
      endDay = `${pEndDate.getDate()}`;
    }
    if(pEndDate.getMonth().toString().length <=1){
      endMonth = `0${pEndDate.getMonth()}`;
    } else {
      endMonth = `${pEndDate.getMonth()}`;
    }

    if(pBeginDate.getDate().toString().length <=1){
      beginDay = `0${pBeginDate.getDate()}`;
    } else {
      beginDay = `${pBeginDate.getDate()}`;
    }
    if(pBeginDate.getMonth().toString().length <=1){
      beginMonth = `0${pBeginDate.getMonth()}`;
    } else {
      beginMonth = `${pBeginDate.getMonth()}`;
    }

    //pBeginDate.getDate() + pBeginDate.getMonth() + pBeginDate.getFullYear();
    let dateBegin:string = `${pBeginDate.getFullYear()}-${beginMonth}-${beginDay}`;
    let dateEnd:string  = `${pEndDate.getFullYear()}-${endMonth}-${endDay}`;

    console.log("Data Inicial: "+dateBegin);
    console.log("Data Final: "+dateEnd);
    return `https://rest.bandsintown.com/artists/retrieve/events?app_id=retrieve&date=${dateBegin}%2C${dateEnd}`;

  }
}
