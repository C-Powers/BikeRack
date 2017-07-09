import { Injectable } from '@angular/core';
// import firebaseConfig from '../environments/firebase.config.ts';
// import * as firebase from 'firebase';
import { Storage } from './shared/Storage';
import { Location } from './shared/Location';
import { MockData } from '../assets/mock-data/MockData';

export type InternalStateType = {
  [key: string]: any
};

// export type Storage = {
//   name: string,
//   spots: number
// };

// export type Location = {
//   name: string,
//   storage: Storage[]
// };

// export type AllLocationInfo = {
//   locations: Location[]
// };

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  /**
   * Already return a clone of the current state.
   */
  public get state() {
    return this._state = this._clone(this._state);
  }
  /**
   * Never allow mutation
   */
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    /**
     * Use our state getter for the clone.
     */
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    /**
     * Internally mutate our state.
     */
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify( object ));
  }

  public getLocations(): Promise<Location[]> {
    return Promise.resolve(MockData);
  }

  public getLocation(id: string): Promise<Location> {
    return this.getLocations()
                  .then(data => data.find(location => location.name === id))
  }
}
