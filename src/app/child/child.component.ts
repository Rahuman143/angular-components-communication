import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  parentName!: String;
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();

  enterName: string = "rahu";
  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event: string): void {
    this.enterName = event;
    this.onNameChange.emit();
  }
}
