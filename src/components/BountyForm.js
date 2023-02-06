import React, { useState } from "react";

const BountyForm = ({ onCreateBounty }) => {
  const [reward, setReward] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateBounty(reward);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reward">Reward:</label>
      <input
        type="number"
        id="reward"
        value={reward}
        onChange={(event) => setReward(event.target.value)}
      />
      <button type="submit">Create Bounty</button>
    </form>
  );
};

export default BountyForm;
