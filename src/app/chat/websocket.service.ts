import { Injectable } from '@angular/core';
import * as Rxjs from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { }

  private subject: Rxjs.Subject<MessageEvent>;

  public connect(url): Rxjs.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected To: ' + url);
    }
    return this.subject;
  }

  private create(url): Rxjs.Subject<MessageEvent> {
    let wsc = new WebSocket(url);

    let observable = Rxjs.Observable.create((obs: Rxjs.Observer<MessageEvent>) => {
      wsc.onmessage = obs.next.bind(obs);
      wsc.onerror = obs.error.bind(obs);
      wsc.onclose = obs.complete.bind(obs);
      return wsc.close.bind(wsc);
    });
    
    let observer = {
      next: (data: Object) => {
        if (wsc.readyState === WebSocket.OPEN) {
          wsc.send(JSON.stringify(data));
        }
      },
    };
    return Rxjs.Subject.create(observer, observable);
  }
}
