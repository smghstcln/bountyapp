import React, { useEffect } from "react";
import { useBounties } from "../hooks/useBounties";

const Bounties = () => {
  const { bounties, getBounties } = useBounties();

  useEffect(() => {
    getBounties();
  }, [getBounties]);

  return (
    <div>
      <h1>Bounties</h1>
      <ul>
        {bounties.map((bounty) => (
          <li key={bounty.id}>
            <h2>{bounty.title}</h2>
            <p>{bounty.description}</p>
            <p>Reward: {bounty.reward}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bounties;
