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

  

}
