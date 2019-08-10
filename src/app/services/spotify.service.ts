import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}


  getNewRealeases() {
    return this.doCallApiSpotifyByUrl('browse/new-releases')
            .pipe( map( (data: any) => data.albums.items ));
  }

  getSearchedArtists( searchValue: string) {
    return this.doCallApiSpotifyByUrl(`search?q=${ searchValue }&type=artist&limit=15`)
              .pipe( map( (data: any) => data.artists.items));
  }

  getArtistiById( artistId: string ) {
    return this.doCallApiSpotifyByUrl(`artists/${ artistId }`);
  }

  getTopTracksArtistiById( artistId: string ) {
    return this.doCallApiSpotifyByUrl(`artists/${ artistId }/top-tracks?country=us`)
               .pipe( map( data => data['tracks']));
  }

  private doCallApiSpotifyByUrl( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const token = 'BQD12N2u28KuQuASkcY9aCNQEymg4eBItWIiq-WqUDALAvosB92mJ5odHoSxHhLQq0_Aieg44snOyv1EK9g';
    const headers = new HttpHeaders({
       Authorization: `Bearer ${token}`
     });
    return this.http.get(url, { headers });
  }
}
