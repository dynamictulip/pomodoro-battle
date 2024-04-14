import * as React from 'react';
import './TaskBoard.css';
import { Task } from './Tasks/Task';

import { useAuthenticatedContext } from '../hooks/useAuthenticatedContext';
export function TaskBoard() {

    const ref: React.MutableRefObject<null | HTMLDivElement> = React.useRef(null);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        const { clientHeight, clientWidth } = ref.current as HTMLDivElement;
        setWidth(clientWidth);
        setHeight(clientHeight);

        console.log('clientWidth: ' + clientWidth)
        console.log('clientHeight: ' + clientHeight)
    }, []);

    const leeway = 16
    const spriteWidth = 120
    const spriteHeight = 102

    let x = Math.floor(Math.random() * (width - spriteWidth));
    if (x < leeway) x += leeway;
    if ((width - x) <= leeway) x -= leeway

    let y = Math.floor(Math.random() * (height - spriteHeight));
    if (y < leeway) y += leeway;
    if ((height - y) <= leeway) y -= leeway

    const authenticatedContext = useAuthenticatedContext();

    const [score, setScore] = React.useState(0);
    const myOnClick = () => {
        setScore(s => s + 1);
        authenticatedContext.room.send('updateScore', { score: score + 1 });

        //update size of play area
        const { clientHeight, clientWidth } = ref.current as HTMLDivElement;
        setWidth(clientWidth);
        setHeight(clientHeight);

        console.log('clientWidth: ' + clientWidth)
        console.log('clientHeight: ' + clientHeight)
    }


    return (
        <div className="taskboard__container nes-container" ref={ref}>
            <Task x={x} y={y} clickEventHandler={myOnClick} />
        </div>
    );
}
