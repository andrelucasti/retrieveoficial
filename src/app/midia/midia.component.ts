import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rt-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.css']
})
export class MidiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  image:string
  
  @Input()
  alt:string

  @Input()
  link:string


}
