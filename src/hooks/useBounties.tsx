import { useContext } from 'react';
import { BountyContext } from '../context/BountyContext';
import { Bounty, BountyAction } from '../types';

type BountyContextType = {
  state: {
    bounties: Bounty[];
    error: string | null;
  };
  dispatch: React.Dispatch<BountyAction>;
  createBounty: (title: string, description: string, amount: string) => Promise<void>;
};

export const useBounties = () => {
  const { state } = useContext<BountyContextType>(BountyContext);
  const { bounties } = state;
  const getBounties = () => {
    // function to get bounties
  };
  return { bounties, getBounties };
};
