import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;

  constructor(private spotyService: SpotifyService) {
    this.loading = true;
    this.spotyService.getNewRealeases()
      .subscribe( (data: any) => {
        this.newReleases = data;
        this.loading = false;
      });
  }


}
