import React, { useState, useEffect } from 'react';
import { useBounties } from '../hooks/useBounties';
import { BountyList } from '../components/BountyList';

const Home = () => {
  const [filter, setFilter] = useState('');
  const bounties = useBounties(filter);

  return (
    <div className="px-5 py-10">
      <h1 className="text-6xl font-bold text-center">Gitcoin Bounties</h1>
      <p className="text-lg text-center mb-5">A simple platform for funding, issuing, and browsing bounties</p>
      <div className="mb-5">
        <input 
          type="text" 
          placeholder="Filter bounties by keyword..." 
          className="px-2 py-1 rounded-lg shadow-sm w-full" 
          value={filter}
          onChange={e => setFilter(e.target.value)} 
        />
      </div>
      <BountyList bounties={bounties} />
    </div>
  );
};

export default Home;
