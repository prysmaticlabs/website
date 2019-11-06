import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    FontAwesomeModule
  ],
  exports: [
    ClipboardModule,
    FontAwesomeModule
  ],
  providers: []
})
export class ExternalsModule { }