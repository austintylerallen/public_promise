import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FECData = () => {
  const [candidates, setCandidates] = useState([]);
  const apiKey = process.env.REACT_APP_FEC_API_KEY;

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          `https://api.open.fec.gov/v1/candidates/?api_key=${apiKey}&sort=name`
        );
        console.log('API Response:', response);
        setCandidates(response.data.results);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, [apiKey]);

  return (
    <div>
      <h2>Federal Election Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.candidate_id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FECData;
