import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes, RouteComponents } from './routes';
import { ExternalsModule } from './shared/externals.module';
import { PrysmaticFooterComponent } from './shared/prysmatic-footer.component';
import { PrysmaticHeaderComponent } from './shared/prysmatic-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents,
    PrysmaticFooterComponent,
    PrysmaticHeaderComponent
  ],
  imports: [
    BrowserModule,
    ExternalsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
