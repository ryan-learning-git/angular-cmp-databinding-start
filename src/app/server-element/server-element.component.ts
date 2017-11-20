import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  // can alias this by @Input('myAlias') -- the @Input means I can access this from the parent (in this case app.component.html)
  @Input()
  element: { type: string, name: string, content: string }; // this defines the type

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    // this contains element which has 3 props: currentValue (obj), previousValue (obj) and firstChange(bool)
    // note that it contains element because element is a property of this class.
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

}
