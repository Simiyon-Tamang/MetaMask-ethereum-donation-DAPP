import "./App.css";
import LandingPageHeader from "./Components/LandingPageHeader";
import ConnectWallet from "./Components/ConnectWallet";
import IntroCard from "./Components/IntroCard";
import AboutSection from "./Components/AboutSection";
import DonationInfo from "./Components/DonationInfo";

export default function App() {
  return (
    <div>
      <LandingPageHeader />
      <DonationInfo />
      <IntroCard />
      <ConnectWallet />
      <AboutSection />
    </div>
  );
}
