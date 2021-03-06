import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WheelAnimationComponent } from '../shared/wheel-animation/';
import { AppState } from '../app.service';
import { Location } from '../shared/Location';
import { Storage } from '../shared/Storage';

@Component({
  selector: 'location',
  styleUrls: ['./location.component.scss'],
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {
    public location: Location;
    public remainingSpots: number;
    public isCurrentlyAdmin: boolean = true;

    constructor(
        public route: ActivatedRoute,
        public appState: AppState
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.appState.getLocation(params.get('id')))
        .subscribe((location) => {
            console.log('subscript location', location);
            this.location = location;
            console.log('this.location in oninit', this.location);
            this.remainingSpots = this.updateRemainingSpots(location.storage[0]);
        });
    }

    updateRemainingSpots(storage: Storage): number {
        return storage.spots - storage.filledSpots;
    }

    toggleAdmin() {
        this.isCurrentlyAdmin = !this.isCurrentlyAdmin;
    }

//   public ngOnInit() {
//     this.route
//       .data
//       .subscribe((data: any) => {
//         /**
//          * Your resolved data from route.
//          */
//         console.log('data', data);
//         this.localState = data.yourData;
//       });
//   }
}
