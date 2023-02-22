import React from "react";

interface BountyListProps {
  bounties: {
    reward: number;
  }[];
}

const BountyList: React.FC<BountyListProps> = ({ bounties }) => {
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
