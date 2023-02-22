import Link from 'next/link';
import { useWeb3React } from '@web3-react/core';
import Web3Modal from 'web3modal';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavBar() {
  const router = useRouter();
  const { account, activate } = useWeb3React();

  async function login() {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: {},
    });
    const provider = await web3Modal.connect();
    await activate(provider);
    router.push('/');
  }

  return (
    <nav className="bg-white px-8 py-6 flex justify-between">
      <div className="text-gray-900 font-medium text-lg">
        <Link href="/">Bounty Platform</Link>
      </div>
      <div className="flex items-center">
        {account ? (
          <button
            className="rounded-md bg-green-600 text-white py-2 px-4 mr-2"
            onClick={() => router.push('/issue-bounty')}
          >
            Issue a bounty
          </button>
        ) : null}
        {account ? (
          <button
            className="rounded-md bg-green-600 text-white py-2 px-4 mr-2"
            onClick={() => router.push('/fund-bounty')}
          >
            Fund a bounty
          </button>
        ) : null}
        {!account ? (
          <button
            className="rounded-md bg-green-600 text-white py-2 px-4 mr-2"
            onClick={login}
          >
            Connect Wallet
          </button>
        ) : null}
        {!account ? (
          <p className="text-gray-500">
            You need to have MetaMask to use this website.
          </p>
        ) : (
          <div className="flex items-center">
            <p className="mr-2 text-gray-500">{account}</p>
            <button
              className="rounded-md bg-green-600 text-white py-2 px-4"
              onClick={() => {
                window.localStorage.removeItem('web3ModalProvider');
                window.location.reload();
              }}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
