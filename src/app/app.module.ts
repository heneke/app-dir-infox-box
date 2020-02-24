import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ToggleInfoBoxDirective } from './toggle-info-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    ToggleInfoBoxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
