import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor(private websocketService: WebsocketService) {}

  roomId:string

  ngOnInit() {
  }


  createRoom(){
    this.websocketService.createRoom(this.roomId)
  }

  joinRoom(){
    this.websocketService.joinRoom(this.roomId)
  }

  leaveRoom(){
    this.websocketService.leaveRoom()
  }

}
