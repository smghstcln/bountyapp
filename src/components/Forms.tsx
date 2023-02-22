import React, { useState } from 'react';
import { useBounty } from '../context/BountyContext';

const Form = () => {
  const [bountyAmount, setBountyAmount] = useState<number>(0);
  const [deadline, setDeadline] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const { createBounty } = useBounty();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createBounty(bountyAmount.toString(), deadline, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bountyAmount">Bounty Amount:</label>
        <input
          type="number"
          id="bountyAmount"
          value={bountyAmount}
          onChange={(event) => setBountyAmount(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">Create Bounty</button>
    </form>
  );
};

export default Form;
