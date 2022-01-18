import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Jake\'s Task Tracker';

  constructor() { }

  ngOnInit(): void { //want something to run when the component runs
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
