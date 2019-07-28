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

  private doCallApiSpotifyByUrl( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const token = 'BQCvnxP057RgES2iFhrIL9XhLG2z0v3zlrCAL5djuOdddnSOarOfJAe76eVLNRKHUXkLXgcNoDCNYVjgk8o';
    const headers = new HttpHeaders({
       Authorization: `Bearer ${token}`
     });
    return this.http.get(url, { headers });
  }
}
