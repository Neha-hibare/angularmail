import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {

 public showCompose: boolean;
    @Output() activeMailbox = new EventEmitter();
    @Output() activeItemNav = new EventEmitter<number>();

    public onMailboxSelected(arr: string[]): void {
        this.activeMailbox.emit(arr);
    }

    public onItemNav(id: number): void {
        this.activeItemNav.emit(id);
    }

    ngOnInit(){

    }
     public onCompose(): void {
        this.showCompose = true;
    }

}
