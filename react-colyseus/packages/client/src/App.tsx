import * as React from 'react';
import './App.css'

import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext';
import { PlayersContextProvider } from './hooks/usePlayers';

import { VoiceChannelActivity } from './components/VoiceChannelActivity';
import { TaskBoard } from './components/TaskBoard';

export default function App() {
  return (
    <div className='container override-font nes-container'>
      <AuthenticatedContextProvider>
        <PlayersContextProvider>
          <div className="box box-taskboard">
            <TaskBoard />
          </div>
          <div className="box box-players">
            <VoiceChannelActivity />
          </div>
        </PlayersContextProvider>
      </AuthenticatedContextProvider>
    </div>
  );
}
