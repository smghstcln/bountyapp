import { Key } from "react";

export type Bounty = {
    id: Key | null | undefined;
    _id: string;
    title: string;
    description: string;
    issuer: string;
    reward: number;
    status: string;
  };
   
  export type BountyAction = 
    | { type: 'ADD_BOUNTY', payload: Bounty }
    | { type: 'REMOVE_BOUNTY', payload: string }
    | { type: 'FETCH_BOUNTIES', payload: Bounty[] }
    | { type: 'BOUNTIES_ERROR', payload: string }
    | { type: 'APPROVE_BOUNTY', payload: string };
  