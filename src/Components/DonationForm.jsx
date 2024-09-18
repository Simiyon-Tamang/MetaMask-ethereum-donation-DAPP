import React, { useState } from "react";
import { ethers } from "ethers";

console.log("Ethers:", ethers);
export default function DonationForm({ walletAddress }) {
  const [amount, setAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");

  let account;
  const getAccount = () => {
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      account = accounts[0];
      console.log(account);
    });
  };
  getAccount();

  const handleSubmit = async () => {
    let transactionParam = {
      to: "0x45B6b39e1Cf8A6b4Ff2720f6BA0089d4574126E5",
      from: account,
      value: "12309CE54000" /* $0.05 => eth => decimal => Hexa Decimal */,
    };
    ethereum
      .request({ method: "eth_sendTransaction", params: [transactionParam] })
      .then((txhash) => {
        console.log(txhash);
      });
  };
  function checkTransactionconfirmation(txhash) {
    let checkTransactionLoop = () => {
      return ethereum
        .request({ method: "eth_getTransactionReceipt", params: [txhash] })
        .then((r) => {
          if (r != null) return "confirmed";
          else return checkTransactionLoop();
        });
    };

    return checkTransactionLoop();
  }
  return (
    <div className="donation-form">
      <h2>Donate ETH</h2>
      <h3 style={{ textAlign: "center", marginBottom: "13px" }}>
        Wallet Address: {walletAddress}
      </h3>
      <button className="button-85" onClick={handleSubmit}>
        Donate 0.00002 Eth
      </button>
      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
}
