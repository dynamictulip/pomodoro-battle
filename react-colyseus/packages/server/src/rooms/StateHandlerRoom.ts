import { Room, Client } from 'colyseus';
import { TPlayerOptions } from '../entities/Player';
import { State, IState } from '../entities/State';

export class StateHandlerRoom extends Room<State> {
  maxClients = 1000;

  onCreate(options: IState) {
    this.setState(new State(options));

    // Here's where we would add handlers for updating state
    this.onMessage('startTalking', (client, _data) => {
      this.state.startTalking(client.sessionId);
    });

    this.onMessage('stopTalking', (client, _data) => {
      this.state.stopTalking(client.sessionId);
    });

    this.onMessage('updateScore', (client, _data) => {
      this.state.updateScore(client.sessionId, _data.score);
    });

    this.onMessage('startTimer', (client, _data) => {
      this.state.startTimer(this.clock);
    });
  }

  onAuth(_client: any, _options: any, _req: any) {
    return true;
  }

  onJoin(client: Client, options: TPlayerOptions) {
    this.state.createPlayer(client.sessionId, options);
  }

  onLeave(client: Client) {
    this.state.removePlayer(client.sessionId);
  }

  onDispose() {
    console.log('Dispose StateHandlerRoom');
  }
}
