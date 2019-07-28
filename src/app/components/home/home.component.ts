import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newReleases: any[] = [];

  constructor(private spotyService: SpotifyService) {
    this.spotyService.getNewRealeases()
      .subscribe( (data: any) => this.newReleases = data );
  }


}
