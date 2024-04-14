import * as React from 'react';
import './App.css'

import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext';
import { PlayersContextProvider } from './hooks/usePlayers';

import { VoiceChannelActivity } from './components/VoiceChannelActivity';
import { TaskBoard } from './components/TaskBoard';

export default function App() {
  return (
    <div className='container-fluid override-font nes-container h-100'>
      <AuthenticatedContextProvider>
        <PlayersContextProvider>
          <div className="row h-75">
            <div className="col">
              <TaskBoard />
            </div>
          </div>
          <div className="row h-25">
            <div className="col">
              <VoiceChannelActivity />
            </div>
          </div>
        </PlayersContextProvider>
      </AuthenticatedContextProvider>
    </div>
  );
}
