import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { ParallaxModule } from 'ngx-parallax';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    ParallaxModule,
    FontAwesomeModule
  ],
  exports: [
    ClipboardModule,
    ParallaxModule,
    FontAwesomeModule
  ],
  providers: []
})
export class ExternalsModule { }