import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text: string = "button";
@Input() color: string = "black";
@Output() myData = new EventEmitter<string>()
public onClick(){
  this.myData.emit("this is from child")
}
ngOnInit(): void {
  
}
}
