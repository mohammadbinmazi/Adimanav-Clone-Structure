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
    </div>
  );
}

export default App;
