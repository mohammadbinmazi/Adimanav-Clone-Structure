import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";

import AnnouncementBar from "./Components/AnnouncementBar/AnnouncementBar";
import KidsCollection from "./Components/Kidscollections/Kidscollections";
import GiftCardSection from "./Components/GiftCardSection/GiftCardSection";

import AdultSection from "./Components/AdultCollections/AdultCollections";
import FamilyCollection from "./Components/FamilyCollection/FamilyCollection";
import BestsellingKidsTshirts from "./Components/BestsellingKidsTshirt/BestSellingKidsTshirts";
import BestsellingAdultTshirts from "./Components/BestSellingAdultTshirts/BestSellingAdultTshirt";
import FeaturesSection from "./Components/FeatureSection/FeatureSection";

function App() {
  return (
    <div className="full-screen-container">
      <AnnouncementBar />
      <Navbar />
      <Header />
      <KidsCollection />
      <GiftCardSection />
      <AdultSection />
      <FamilyCollection />
      <BestsellingKidsTshirts />
      <BestsellingAdultTshirts />
      <FeaturesSection />
    </div>
  );
}

export default App;
