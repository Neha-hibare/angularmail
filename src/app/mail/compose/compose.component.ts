import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() showCompose: boolean;
   // @Output() onClose = new EventEmitter<Object>();

    public activeMailbox: string[];

  

    public close(mail): void {
        this.showCompose = false;
    }

}
