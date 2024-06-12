import "./Event.scss";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EventDetailType } from "../../api/types";

export const Event = () => {
  const [eventDetails, setEventDetails] = useState<EventDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
      .then(response => {
        setEventDetails(response.data.event_detail);
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

  if (!eventDetails) {
    return <div>No event data</div>;
  }

  return (
    <div className="event-container event-card" >
      <div className="event-banderole">
        <p>{eventDetails.date}</p>
        <p>{eventDetails.type}</p>
      </div>
      <p>Début du match: {eventDetails.start_at}</p>
      <p>Fin du match: {eventDetails.end_at}</p>
      <p>{eventDetails.left_team.name} <span>{eventDetails.left_team.score ?? 'N/A'} - {eventDetails.right_team.score ?? 'N/A'}</span> vs {eventDetails.right_team.name}</p>
    </div>
  );
};

export default Event;