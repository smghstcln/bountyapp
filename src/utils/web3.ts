import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const bountyContractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // actual contract address

const bountyContractABI = [
  //  actual contract ABI
  {
    "inputs": [],
    "name": "beforeAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkFailure",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkSenderAndValue",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkSuccess",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkSuccess2",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
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
