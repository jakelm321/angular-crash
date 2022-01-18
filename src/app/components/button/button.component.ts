import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Default"; //Apparently they need to be initalized otherwise you get an error
  @Input() color: string = "Blue";
  @Input() fsize: string = "16px";

  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }

}
