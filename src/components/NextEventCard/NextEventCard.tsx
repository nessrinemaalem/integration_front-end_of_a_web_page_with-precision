import { LastNextEventType } from '../../api/types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const NextEventCard = () => {
	const [eventDetails, setEventDetails] = useState<LastNextEventType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	
	useEffect(() => {
		axios.get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
		  .then(response => {
			setEventDetails(response.data.next_event);
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
		<div>
			<p>Prochain Match</p>
			<p>{eventDetails.left_team.name}</p><span>{eventDetails.left_team.score}</span>
			<p>{eventDetails.right_team.name}</p><span>{eventDetails.right_team.score}</span>
		</div>
	);
};