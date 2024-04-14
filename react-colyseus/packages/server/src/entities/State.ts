import { Schema, MapSchema, type } from '@colyseus/schema';
import { TPlayerOptions, Player } from './Player';
import { Clock, Delayed } from 'colyseus';

export interface IState {
  roomName: string;
  channelId: string;
}

export class State extends Schema {
  @type({ map: Player })
  players = new MapSchema<Player>();

  @type('string')
  public roomName: string;

  @type('string')
  public channelId: string;

  serverAttribute = 'this attribute wont be sent to the client-side';

  // Init
  constructor(attributes: IState) {
    super();
    this.roomName = attributes.roomName;
    this.channelId = attributes.channelId;
  }

  private _getPlayer(sessionId: string): Player | undefined {
    return Array.from(this.players.values()).find((p) => p.sessionId === sessionId);
  }

  createPlayer(sessionId: string, playerOptions: TPlayerOptions) {
    const existingPlayer = Array.from(this.players.values()).find((p) => p.sessionId === sessionId);
    if (existingPlayer == null) {
      this.players.set(playerOptions.userId, new Player({ ...playerOptions, sessionId }));
    }
  }

  removePlayer(sessionId: string) {
    const player = Array.from(this.players.values()).find((p) => p.sessionId === sessionId);
    if (player != null) {
      this.players.delete(player.userId);
    }
  }

  startTalking(sessionId: string) {
    const player = this._getPlayer(sessionId);
    if (player != null) {
      player.talking = true;
    }
  }

  stopTalking(sessionId: string) {
    const player = this._getPlayer(sessionId);
    if (player != null) {
      player.talking = false;
    }
  }

  updateScore(sessionId: string, newScore: number) {
    const player = this._getPlayer(sessionId);
    if (player != null) {
      player.score = newScore;
    }

  }

  /*** Timer functions ***/
  @type('number')
  public percentLeft = 100;
  @type('boolean')
  public timerRunning = false;

  maxTimeMilliseconds = 25 * 1000;
  delayed: Delayed | undefined;

  startTimer(clock: Clock) {
    this.timerRunning = true
    this.percentLeft = 100

    clock.clear();
    clock.start();

    console.log("Clock started")

    this.delayed = clock.setInterval(this.updateTimer, 100, clock)
  }

  updateTimer = (clock: Clock) => {
    if (!clock) {
      console.log("No clock!")
      return
    }
    const elapsed = clock.elapsedTime
    //Has timer finished?
    if (elapsed >= this.maxTimeMilliseconds) {
      this.percentLeft = 0;
      this.timerRunning = false;
      this.delayed?.clear();
      console.log("Stopped clock")
      return;
    }

    //Update progress
    this.percentLeft = 100 - (elapsed / this.maxTimeMilliseconds) * 100;

    console.log("Updated to " + this.percentLeft)
    this.delayed?.reset;
  }
}
