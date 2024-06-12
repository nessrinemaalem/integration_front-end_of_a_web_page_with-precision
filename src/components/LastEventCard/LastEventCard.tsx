import { LastNextEventType } from '../../api/types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LastEventCard.scss';

export const LastEventCard = () => {
	const [eventDetails, setEventDetails] = useState<LastNextEventType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	
	useEffect(() => {
		axios.get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
		  .then(response => {
			setEventDetails(response.data.last_event);
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
		<div className="event-container last-event-card">
			<p>Prochain Match</p>
			<p>{eventDetails.left_team.name}  <span>{eventDetails.left_team.score}</span></p>
			<p>{eventDetails.right_team.name}  <span>{eventDetails.right_team.score}</span></p>
		</div>
	);
};