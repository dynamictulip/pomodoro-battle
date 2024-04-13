import * as React from 'react';
import './App.css'

import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext';
import { PlayersContextProvider } from './hooks/usePlayers';

import { VoiceChannelActivity } from './components/VoiceChannelActivity';
import { TaskBoard } from './components/TaskBoard';

export default function App() {
  return (
    <div className='container-fluid override-font nes-container'>
      <div className="row ">
        <div className="col">
          <TaskBoard />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AuthenticatedContextProvider>
            <PlayersContextProvider>
              <VoiceChannelActivity />
            </PlayersContextProvider>
          </AuthenticatedContextProvider>
        </div>
      </div>
    </div>
  );
}
