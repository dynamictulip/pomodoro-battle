import * as React from 'react';
import './Task.css';


export function Task({ x, y, clickEventHandler }: { x: number, y: number, clickEventHandler: () => void }) {
    return (
        <i
            className="nes-bulbasaur"
            style={{ top: y, left: x }}
            onClick={clickEventHandler}></i >
    );
}


