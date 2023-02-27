// utils/web3.ts

import Web3 from "web3";
import { Bounty } from "../types";

const web3 = new Web3(Web3.givenProvider);

const bountyContractAddress = "0x123abc..."; // actual contract address

const bountyContractABI = [
  //  actual contract ABI
  {
    constant: false,
    inputs: [
      {
        name: "title",
        type: "string",
      },
      {
        name: "description",
        type: "string",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "createBounty",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
];

const bountyContract = new web3.eth.Contract(
  bountyContractABI as any,
  bountyContractAddress
);

export const createBounty = async (
  title: string,
  description: string,
  amount: string
): Promise<void> => {
  const accounts = await web3.eth.getAccounts();
  await bountyContract.methods.createBounty(title, description, amount).send({
    from: accounts[0],
    value: web3.utils.toWei(amount),
  });
};
