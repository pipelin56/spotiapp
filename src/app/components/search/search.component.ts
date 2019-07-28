import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  searchedArtists: any[] = [];
  loading: boolean;
  constructor(private spotiService: SpotifyService) {  }

  searchArtists(searchValue: string) {
    if (searchValue.length === 0) {
       this.loading = false;
       this.searchedArtists = [];
    } else {
        this.loading = true;
        this.spotiService.getSearchedArtists(searchValue)
        .subscribe( (data: any) => {
            this.searchedArtists = data;
            this.loading = false;
        } );
      }
    }

}
