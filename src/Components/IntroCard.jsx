import React from "react";
import "../App.css";

export default function IntroCard() {
  return (
    <div className="intro-card-header">
      <div className="intro-card">
        <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <h1>Download and Connect your MetaMask</h1>
        <p>
          Install{" "}
          <a
            href="https://metamask.io/download.html"
            target="_blank"
            className="metamask-link"
          >
            MetaMask
          </a>{" "}
          by adding it as an extension to your preferred web browser.
        </p>
        <p>
          Click the "Connect MetaMask" button below to link your MetaMask
          wallet.
        </p>
        <p>
          Once your wallet is successfully connected, scroll down and click the
          "Donate ETH" button to begin making a donation.
        </p>
      </div>
    </div>
  );
}
