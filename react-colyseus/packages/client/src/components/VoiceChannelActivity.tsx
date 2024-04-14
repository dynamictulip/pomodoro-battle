import * as React from 'react';
import { Player } from './Player';
import { usePlayers } from '../hooks/usePlayers';
import './VoiceChannelActivity.css';
import { Timer } from './Timer';

export function VoiceChannelActivity() {
  const players = usePlayers();

  return (
    <div className='nes-container is-dark with-title'>
      <p className="title">Players</p>
      <div className="voice__channel__container">
        {players.map((p) => (
          <Player key={p.userId} {...p} />
        ))}
      </div>
      <Timer />

    </div>
  );
}
