import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent{

  loading: boolean;
  artist: any;

  constructor(private router: ActivatedRoute, private spotiService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtistInfo(params['id']);
      console.log(this.artist);
    });
  }

  getArtistInfo(id: string) {
    this.artist = this.spotiService
                      .getArtistiById(id)
                      .subscribe( (data: any) => {this.artist = data; this.loading = false;
                      });
  }

}
