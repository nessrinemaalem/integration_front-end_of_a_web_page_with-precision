import { AttendeeType } from '../../api/types';
import './AttendeeTable.scss';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PlayerRow: React.FC<{ player: AttendeeType }> = ({ player }) => {
  return (
    <tr className="player-row">
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

export const AttendeeTable: React.FC = () => {
  const [players, setPlayers] = React.useState<AttendeeType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
      .then(response => {
        setPlayers(response.data.attendees);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!players) {
    return <div>No player data</div>;
  }

  return (
    <div className="event-container player-attendee-card">
      <PlayerTable players={players} />
    </div>
  );
};
