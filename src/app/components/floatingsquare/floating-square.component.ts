import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'floating-square',
  templateUrl: './floating-square.component.html',
  styleUrls: ['./floating-square.component.css']
})
export class FloatingSquareComponent implements OnInit {

  @Input() isFloating: boolean;
  constructor() { }

  ngOnInit() {
  }

}












