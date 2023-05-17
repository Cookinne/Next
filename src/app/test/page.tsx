'use client';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styles from './style.module.css';

export default function Test() {

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const checkWallet = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const balance = await provider.getBalance(address);
          setAddress(address);
          setBalance(ethers.utils.formatEther(balance));
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkWallet();
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        setAddress(address);
        setBalance(ethers.utils.formatEther(balance));
      } else {
        alert("请安装 MetaMask 钱包！");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.container}>
        <button className={styles.btn} onClick={connectWallet}>连接钱包</button>
      </div>
      <div>
        <p>地址：{address || '--'}</p>
        <p>余额：{balance || '--'}</p>
      </div>
    </main>
  );
}
