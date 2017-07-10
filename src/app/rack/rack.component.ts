import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppState } from '../app.service';
import { Location } from '../shared/Location';

@Component({
  selector: 'rack',
  styleUrls: ['./rack.component.scss'],
  templateUrl: './rack.component.html'
})
export class RackComponent implements OnInit {
    public storage: Location;
  
    constructor(
        public route: ActivatedRoute,
        public appState: AppState
    ) {}

    ngOnInit(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.appState.getLocation(params.get('id')))
        .subscribe((storage) => {
            console.log('subscript storage', storage);
            this.storage = storage;
            console.log('this.storage in oninit', this.storage);
        });
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
