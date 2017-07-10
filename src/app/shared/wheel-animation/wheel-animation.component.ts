import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, ParamMap } from '@angular/router';
//import { AppState } from '../../app.service';
import { Location } from '../Location';
import { Storage } from '../Storage';

@Component({
  selector: 'wheel-animation',
  styleUrls: ['./wheel-animation.css'],
  templateUrl: './wheel-animation.component.html'
})
export class WheelAnimationComponent {
    public BikeWheelPath = 'assets/img/bikewheel.svg';
    public WheelShadowPath = 'assets/img/wheelshadow.svg';
}
