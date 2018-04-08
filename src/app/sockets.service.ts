import { Injectable } from '@angular/core';
import { Echo } from 'laravel-echo';

@Injectable()
export class SocketsService {
  echo: Echo = null

  setupWithToken(token) {
    if (!token) {
      this.echo = null;


      return;
    }

    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: 'http://localhost:6001',
      auth: {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    });

    window['echo'] = this.echo;

    this.listen();
  }

  listen() {
    this.echo.private('test-channel')
      .listen('.test', (e) => {
        console.log(e);
        alert('Received TEST event via Sockets private, secured channel!');
      });
  }

}



