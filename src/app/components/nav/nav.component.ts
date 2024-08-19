import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @Output() @Input() routePage = new EventEmitter();
  
  changePage(page:string)
  {
    this.routePage.emit(page)
  }

}
