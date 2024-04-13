import * as React from 'react';
import './TaskBoard.css';
import { Task } from './Tasks/Task';

export function TaskBoard() {
    return (
        <div className="taskboard__container nes-container">
            <Task />
        </div>
    );
}
