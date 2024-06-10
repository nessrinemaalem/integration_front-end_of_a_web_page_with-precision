import React from 'react';
import { AttendeeType } from '../../api/types';
import './Test.scss';

const PlayerRow: React.FC<{ player: AttendeeType }> = ({ player }) => {
  return (
    <tr>
      <td><img src={player.photo_url} alt={`${player.first_name} ${player.last_name}`} /></td>
      <td>{player.last_name}</td>
      <td>{player.first_name}</td>
      <td>{player.email}</td>
      <td>{player.status}</td>
    </tr>
  );
};


const PlayerTable: React.FC<{ players: AttendeeType[] }> = ({ players })=> {
  return (
    <div className='player-table-block'>
    <table>
      <caption className='player-table-caption'>8 joueurs convoqués</caption>
      <thead>
        <tr className='player-table-tr'>
          <th>Photo</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <PlayerRow key={player.email} player={player} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export const Test: React.FC = () => {
  const players: AttendeeType[] = [
    { 
      photo_url: '../photo/1.jpeg', 
      first_name: 'John', 
      last_name: 'Doe', 
      email: 'john.doe@example.com', 
      status: 'present' 
    },
    { 
      photo_url: '../photo/2.jpeg', 
      first_name: 'Jane', 
      last_name: 'Smith', 
      email: 'jane.smith@example.com', 
      status: 'absent' 
    },
    { 
      photo_url: '../photo/3.jpeg', 
      first_name: 'Bob', 
      last_name: 'Johnson', 
      email: 'bob.johnson@example.com', 
      status: 'present' 
    },
  ];

  return (
    <div className="event-container">
      <PlayerTable players={players} />
    </div>
  );
};
