import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval ;
  lasNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lasNumber+1);
      this.lasNumber++;
    }, 1000);
  }

  onServerPause(){
    clearTimeout(this.interval);
  }
 
}
