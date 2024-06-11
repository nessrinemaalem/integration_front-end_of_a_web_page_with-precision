import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProfileType } from '../../api/types';

export const PlayerProfile: React.FC = () => {
  const [player, setPlayer] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
      .then(response => {
        setPlayer(response.data.profile);
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

  if (!player) {
    return <div>No player data</div>;
  }

  return (
    <div>
      <img src={player.photo_url} alt={`${player.first_name} ${player.last_name}`} style={{ width: '100px', height: '100px' }} />
      <h1>{`${player.first_name} ${player.last_name}`}</h1>
      <p>{player.email}</p>
      <p>{player.phone_number}</p>
    </div>
  );
};

export default PlayerProfile;
