import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styles: []
})
export class ArtistCardComponent {

  @Input() items: any[] = [];

  constructor() { }

}
