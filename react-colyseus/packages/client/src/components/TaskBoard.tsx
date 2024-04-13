import * as React from 'react';
import './TaskBoard.css';
import { Task } from './Tasks/Task';

import "@pixi/events";
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

export function TaskBoard() {
    const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';

    return (
        <div className="taskboard__container nes-container h-100">
            <Stage width={800} height={600} options={{ background: 0x1099bb }}>
                <Sprite image={bunnyUrl} x={300} y={150} />
                <Sprite image={bunnyUrl} x={500} y={150} />
                <Sprite
                    image={bunnyUrl}
                    x={400}
                    y={200}
                    mousedown={() => alert('down, Sara')}
                    onclick={() => alert('Yo, Sara')}
                />

                <Container x={200} y={200}>
                    <Text
                        text="Hello World"
                        anchor={0.5}
                        x={220}
                        y={150}
                    />
                </Container>
            </Stage>
        </div>
    );
}
