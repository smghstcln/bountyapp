import React from "react";

const BountyList = ({ bounties }) => {
  return (
    <ul>
      {bounties.map((bounty, index) => (
        <li key={index}>
          <h2>Bounty {index + 1}</h2>
          <p>Reward: {bounty.reward}</p>
        </li>
      ))}
    </ul>
  );
};

export default BountyList;
