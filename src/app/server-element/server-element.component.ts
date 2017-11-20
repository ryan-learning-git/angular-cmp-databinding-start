import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // can alias this by @Input('myAlias') -- the @Input means I can access this from the parent (in this case app.component.html)
  @Input()
  element: { type: string, name: string, content: string }; // this defines the type

  constructor() { }

  ngOnInit() {
  }

}
