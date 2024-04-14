import * as React from 'react';
import { GameTime as GameTimeState } from '../../../server/src/entities/GameTime';
import { useAuthenticatedContext } from './useAuthenticatedContext';

const GameTimeContext = React.createContext<GameTimeState>(new GameTimeState({ percentLeft: 100, timerRunning: false }));

export function GameTimeContextProvider({ children }: { children: React.ReactNode }) {
    const [gameTime, setGameTime] = React.useState<GameTimeState>(new GameTimeState({ percentLeft: 100, timerRunning: false }));

    const authenticatedContext = useAuthenticatedContext();

    React.useEffect(() => {
        authenticatedContext.room.state.gameTime.onChange = function (changes) {
            setGameTime(new GameTimeState(authenticatedContext.room.state.gameTime));
        };
    }, [authenticatedContext.room]);


    return <GameTimeContext.Provider value={gameTime}>{children}</GameTimeContext.Provider>;
}

export function useGameTime() {
    return React.useContext(GameTimeContext);
}
