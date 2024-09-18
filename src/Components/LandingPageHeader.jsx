import React from "react";
import "../App.css";
import ConnectWallet from "./ConnectWallet";
import IntroCard from "./IntroCard";


const LandingPageHeader = () => {
  return (
    <div>
      <header>
        <div className="header">
          <h1>CIS Club Donation Portal</h1>
          <p>
            Support the CIS Club at North Carolina Wesleyan University by
            contributing with Ethereum. Your generous donations will help fund
            club activities, events, and initiatives, enabling us to enhance our
            impact and support our community.
          </p>
        </div>
      </header>
    </div>
  );
};

export default LandingPageHeader;
