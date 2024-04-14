import { Schema, type } from '@colyseus/schema';
export type TGameTimeOptions = Pick<GameTime, 'percentLeft' | 'timerRunning'>;

export class GameTime extends Schema {
    @type('number')
    public percentLeft: number;
    @type('boolean')
    public timerRunning: boolean;

    constructor({ percentLeft, timerRunning }: TGameTimeOptions) {
        super();
        this.percentLeft = percentLeft
        this.timerRunning = timerRunning
    }
}
