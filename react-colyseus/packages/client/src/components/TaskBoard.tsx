import * as React from 'react';
import './TaskBoard.css';
import { Task } from './Tasks/Task';

import { useAuthenticatedContext } from '../hooks/useAuthenticatedContext';
export function TaskBoard() {

    const authenticatedContext = useAuthenticatedContext();
    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 300);

    const [score, setScore] = React.useState(0);
    const myOnClick = () => {
        setScore(s => s + 1);
        authenticatedContext.room.send('updateScore', { score: score + 1 });
    }


    return (
        <div className="taskboard__container nes-container h-100">
            <Task x={x} y={y} clickEventHandler={myOnClick} />
        </div>
    );
}
