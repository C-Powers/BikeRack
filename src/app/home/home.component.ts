import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Location } from '../shared/Location';
import { MockData } from '../../assets/mock-data/MockData';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public BikeRackLogoPath = 'assets/img/BikeRack-logo.png'
  public locations: Location[] = [];

  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit(): void {
    console.log('hello `Home` component');
    this.appState.getLocations()
      .then(locations => this.locations = locations);
  }
}
