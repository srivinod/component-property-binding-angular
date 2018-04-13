import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-play',
  templateUrl: './odd-play.component.html',
  styleUrls: ['./odd-play.component.css']
})
export class OddPlayComponent implements OnInit {
  @Input() numbers  : number;
  constructor() { }

  ngOnInit() {
  }

}
