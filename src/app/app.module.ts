import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Application components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { LoadingComponent } from './components/share/loading/loading.component';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { SecureDomPipe } from './pipes/securedom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    ArtistCardComponent,
    LoadingComponent,
    NoimagePipe,
    SecureDomPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
