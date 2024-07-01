import React, { useEffect, useState } from 'react';
import { fetchFECData, fetchRepresentativeData } from './DataFetcher';
import './index.css';

const App = () => {
  const [representatives, setRepresentatives] = useState([]);
  const address = '1263 Pacific Ave. Kansas City KS';

  useEffect(() => {
    const fetchData = async () => {
      const fetchedFECData = await fetchFECData();
      const fetchedRepresentativeData = await fetchRepresentativeData(address);

      // Link FEC data to representative data
      const linkedData = fetchedRepresentativeData.map(rep => {
        const matchingFECData = fetchedFECData.find(fec => 
          fec.candidate_id === rep.candidateId || 
          fec.committee_id === rep.committeeId
        );
        return { ...rep, fecData: matchingFECData };
      });

      setRepresentatives(linkedData);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Representatives and FEC Data</h1>
      <ul className="data-list">
        {representatives.length > 0 ? (
          representatives.map((rep, index) => (
            <li key={index} className="data-item">
              <div>
                <img src={rep.photoUrl || 'placeholder.jpg'} alt={rep.name} />
                <p>{rep.name} - {rep.office}</p>
                {rep.fecData ? (
                  <div>
                    <p>Committee: {rep.fecData.committee_name}</p>
                    <p>Total Contributions: ${rep.fecData.receipts.toLocaleString()}</p>
                    <p>Disbursements: ${rep.fecData.disbursements.toLocaleString()}</p>
                    <p>Cash on Hand: ${rep.fecData.cash_on_hand_end_period.toLocaleString()}</p>
                  </div>
                ) : (
                  <p>No FEC data available</p>
                )}
              </div>
            </li>
          ))
        ) : (
          <li>No representative data available</li>
        )}
      </ul>
    </div>
  );
};

export default App;
