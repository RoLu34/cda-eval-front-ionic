import { Component, OnInit } from '@angular/core';
import { Client } from '../interface/client';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
})
export class ClientListPage implements OnInit {

  constructor(private websocketService: WebsocketService) { }

  ngOnInit() {
  }

}
