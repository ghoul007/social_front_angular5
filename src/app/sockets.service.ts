import { Injectable } from '@angular/core';
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";
@Injectable()
export class SocketsService {

  public socket;
  observable: any;
  baseUrl: string;

  constructor(location: Location) {

    this.baseUrl = "http://localhost:6001"
  }

  /**
   * get Event from SocketIO
   */
  getEvent(event = null) {
    this.observable = new Observable(observer => {
      this.socket = io(this.baseUrl);

      this.socket.on(event, function (data) {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return this.observable;
  }

  /**
   * Send Event to SocketIO
   */
  sendEvent(event, data) {
    this.socket.emit(event, JSON.parse(data));
  }
}
