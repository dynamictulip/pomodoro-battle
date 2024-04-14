import * as React from 'react';
import './Timer.css';
import { useGameTime } from '../hooks/useGameTimer';
import { useAuthenticatedContext } from '../hooks/useAuthenticatedContext';
import { GameTime, TGameTimeOptions } from '../../../server/src/entities/GameTime';

export function Timer({ percentLeft, timerRunning }: TGameTimeOptions) {

    const authenticatedContext = useAuthenticatedContext();

    let cssClass = "";
    let progressValue = percentLeft
    // if (progressValue > 80)
    //     cssClass = "nes-progress"
    // else 
    if (progressValue > 70)
        cssClass = "nes-progress is-primary"
    else if (progressValue > 30)
        cssClass = "nes-progress is-success"
    else if (progressValue > 10)
        cssClass = "nes-progress is-warning"
    else if (progressValue > 0)
        cssClass = "nes-progress is-error"
    else {
        cssClass = "nes-progress is-pattern"
        progressValue = 100
    }

    // gameTime.listen('percentLeft', (current, previous) => {
    //     progressValue = gameTime.percentLeft

    //     if (progressValue > 70)
    //         cssClass = "nes-progress is-primary"
    //     else if (progressValue > 30)
    //         cssClass = "nes-progress is-success"
    //     else if (progressValue > 10)
    //         cssClass = "nes-progress is-warning"
    //     else if (progressValue > 0)
    //         cssClass = "nes-progress is-error"
    //     else {
    //         cssClass = "nes-progress is-pattern"
    //         progressValue = 100
    //     }
    // });

    const startTimer = () => {
        authenticatedContext.room.send("startTimer");
    }

    if (timerRunning) {
        return (
            <div className='timer__container'>
                <progress className={cssClass} value={progressValue} max="100"></progress>
            </div>
        );
    }
    return (
        <div className='timer__container'>
            <button type="button" className="nes-btn is-primary" onClick={startTimer}>Start timer</button>
        </div>
    );
}