import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebsocketService } from './websocket.service';
import { Message } from './interface/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private WEBSOCKET_URL = "ws://localhost:8080/";
  public chatMessages: Subject<Message>;

  constructor(websocketService: WebsocketService) {
    this.chatMessages = <Subject<Message>>(
      websocketService.connect(this.WEBSOCKET_URL).pipe(map((response: MessageEvent): Message => {
        let payload = JSON.parse(response.data);
        console.log(payload)
        return {
          message: payload.message,
          username: payload.client_id,
          date: payload.date,
          room: payload.room
        };
      }))
    )
  }

}
