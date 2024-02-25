import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Input()
  mainCardPhoto:string = "";
  @Input()
  mainCardTitle:string = "";
  @Input()
  mainCardDescription:string = "";

}
