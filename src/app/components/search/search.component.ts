import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  searchedArtists: any[] = [];
  constructor(private spotiService: SpotifyService) {  }

  searchArtists(searchValue: string) {
    console.log(searchValue);
    this.spotiService.getSearchedArtists(searchValue)
    .subscribe( (data: any) => this.searchedArtists = data );
  }

}
