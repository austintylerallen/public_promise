import React, { useEffect, useState } from 'react';
import { getPoliticians } from '../services/politicianService';
import './PoliticianList.css'; // Import custom CSS

const PoliticianList = () => {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    const fetchPoliticians = async () => {
      const data = await getPoliticians();
      setPoliticians(data);
    };

    fetchPoliticians();
  }, []);

  return (
    <div className="card bg-matte-navy text-white mb-4">
      <div className="card-header bg-bright-orange text-white">
        <h2 className="header-text">Politicians</h2>
      </div>
      <div className="card-body card-body-custom">
        <ul className="list-group">
          {politicians.map((politician) => (
            <li key={politician.id} className="list-group-item list-group-item-custom">
              {politician.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoliticianList;
