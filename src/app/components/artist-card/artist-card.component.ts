import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styles: []
})
export class ArtistCardComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  showArtist( item: any) {
    let artistId: any;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }

}
