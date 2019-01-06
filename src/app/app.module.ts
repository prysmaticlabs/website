import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes, RouteComponents } from './routes';
import { ExternalsModule } from './shared/externals.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents
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
