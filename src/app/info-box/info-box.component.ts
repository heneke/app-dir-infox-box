import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {

  @Input()
  show = true;

  @HostBinding('class.hidden')
  get hidden() {
      return !this.show;
  }

  toggle() {
    this.show = !this.show;
  }
}
