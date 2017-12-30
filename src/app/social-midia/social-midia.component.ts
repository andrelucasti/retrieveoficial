import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-social-midia',
  templateUrl: './social-midia.component.html',
  styleUrls: ['./social-midia.component.css']
})
export class SocialMidiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.load_function();
  }



  load_function(){
    $('.parallax').parallax();
  }

  

  

}
