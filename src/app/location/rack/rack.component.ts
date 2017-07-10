import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WheelAnimationComponent } from '../shared/wheel-animation/';
import { AppState } from '../../app.service';
import { Location } from '../shared/Location';
import { Storage } from '../shared/Storage';

@Component({
  selector: 'rack',
  styleUrls: ['./rack.component.scss'],
  templateUrl: './rack.component.html'
})
export class RackComponent {
    public location: Location;
    public remainingSpots: number;
    public isCurrentlyAdmin: boolean = true;

    constructor(
        public route: ActivatedRoute,
        public appState: AppState
    ) {}

    updateRemainingSpots(storage: Storage): number {
        return storage.spots - storage.filledSpots;
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
