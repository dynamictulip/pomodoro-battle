import * as React from 'react';
import './TaskBoard.css';
import { Task } from './Tasks/Task';

export function TaskBoard() {
    return (
        <div className="taskboard__container nes-container h-100">
            <Task />
        </div>
    );
}
