import * as React from 'react';
import './Timer.css';

export function Timer() {

    let cssClass = "";
    let progressValue = 3;
    updateProgressBar();

    function updateProgressBar() {
        if (progressValue > 80)
            cssClass = "nes-progress"
        else if (progressValue > 50)
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

    return (
        <progress className={cssClass} value={progressValue} max="100"></progress>
    );
}