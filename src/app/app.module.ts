import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes, RouteComponents } from './routes';
import { ExternalsModule } from './shared/externals.module';
import { PrysmaticFooterComponent } from './shared/prysmatic-footer.component';
import { PrysmaticHeaderComponent } from './shared/prysmatic-header.component';
import { TeamItemComponent } from './pages/home/team-item.component';
import { NewsItemComponent } from './pages/home/news-item.component';
import { PodcastItemComponent } from './pages/home/podcast-item.component';
import { VideoItemComponent } from './pages/home/video-item.component';
import { CanActivateCareers } from './pages/careers/prysmatic-careers.page.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponents,
    PrysmaticFooterComponent,
    PrysmaticHeaderComponent,
    TeamItemComponent,
    NewsItemComponent,
    PodcastItemComponent,
    VideoItemComponent,
  ],
  imports: [
    BrowserModule,
    ExternalsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CanActivateCareers],
  bootstrap: [AppComponent]
})
export class AppModule { }
