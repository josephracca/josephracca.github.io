import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ExtensionsComponent } from './components/extensions/extensions.component';
import { MainComponent } from './pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SkillsetComponent } from './pages/skillset/skillset.component';
import { TerminalComponent } from './pages/terminal/terminal.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ExtensionsComponent,
    MainComponent,
    HeroComponent,
    GalleryComponent,
    SkillsetComponent,
    TerminalComponent,
    FooterComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
