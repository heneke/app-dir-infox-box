import { Directive, HostListener, Input } from '@angular/core';
import { InfoBoxComponent } from './info-box/info-box.component';

@Directive({
  selector: '[appToggleInfoBox]'
})
export class ToggleInfoBoxDirective {

  @Input('appToggleInfoBox')
  target?: InfoBoxComponent;

  @HostListener('click')
  clicked() {
    if (this.target) {
      this.target.toggle();
    }
  }
}
