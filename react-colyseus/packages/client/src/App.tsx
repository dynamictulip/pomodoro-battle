import * as React from 'react';

import { AuthenticatedContextProvider } from './hooks/useAuthenticatedContext';
import { PlayersContextProvider } from './hooks/usePlayers';

import { VoiceChannelActivity } from './components/VoiceChannelActivity';
import { TaskBoard } from './components/TaskBoard';

export default function App() {
  return (
    <div>
      <TaskBoard />

      <AuthenticatedContextProvider>
        <PlayersContextProvider>
          <VoiceChannelActivity />
        </PlayersContextProvider>
      </AuthenticatedContextProvider>
    </div>
  );
}
