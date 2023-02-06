import React, { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { BountyContext } from '../context/BountyContext';

const Bounty = () => {
  const { bounties, approveBounty } = useContext(BountyContext);

  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Bounty Amount</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bounties.map((bounty, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{bounty.amount}</td>
            <td>{bounty.deadline}</td>
            <td>{bounty.status}</td>
            <td>
              <Button onClick={() => approveBounty(index)}>Approve</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Bounty;
