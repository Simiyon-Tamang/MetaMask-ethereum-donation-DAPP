import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import "../App.css";
import DonationForm from "./DonationForm";

export default function ConnectWallet() {
  // Properties
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting account...");

    // ❌ Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.log("Error connecting...");
        setIsConnected(false);
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  return (
    <div className="wallet-container">
      <div className="wallet-connection">
        <button className="button-78" onClick={requestAccount} disabled={isConnecting || isConnected}>
          {isConnecting
            ? "Connecting..."
            : isConnected
              ? "Your MetMask is Successfully Connected"
              : "Connect MetaMask"}
        </button>
      </div>
      {isConnected && (
        <DonationForm
          walletAddress={"0x4DaB98C62f8c3c42E1C3b7E178dD6f8c9F456052"}
        />
      )}
    </div>
  );
}
