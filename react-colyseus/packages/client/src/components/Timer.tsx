import * as React from 'react';
import './Timer.css';
import { useAuthenticatedContext } from '../hooks/useAuthenticatedContext';

export function Timer() {
    const authenticatedContext = useAuthenticatedContext();

    let cssClass = "";
    let progressValue = 100
    updateProgressBar();

    function updateProgressBar() {
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
    }

    //    React.useEffect(() => {
    if (authenticatedContext.room.state.percentLeft) {
        progressValue = authenticatedContext.room.state.percentLeft
        updateProgressBar();
    }
    //  })

    const startTimer = () => {
        authenticatedContext.room.send("startTimer");
    }

    if (authenticatedContext.room.state.timerRunning) {
        return (
            <div className='timer__container'>
                <progress className={cssClass} value={authenticatedContext.room.state.percentLeft} max="100"></progress>
            </div>
        );
    }
    return (
        <div className='timer__container'>
            <button type="button" className="nes-btn is-primary" onClick={startTimer}>Start timer</button>
        </div>
    );
}