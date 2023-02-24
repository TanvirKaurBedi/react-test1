import React, { useState } from "react";
import Card from "./Card/Card";
import "./Container.css";

const Container = () => {
  const [cardData, setCardData] = useState({
    title: "Subscription",
    subTitle: "Monitoring & Insights",
    preText: "(ie. VB+ Advocacy, Creator+ etc.)",
    listItems: [
      "Ongoing Monitoring",
      "Access to Data Vault",
      "Shareable Reproting",
    ],
    socialLinks: "Instagram, Twitter, Youtube",
    rate: "$15/mo USD",
  });

  return (
    <div className="container">
      <div className="header">
        <div className="cardSectionTitle">Monitoring</div>
      </div>
      <div className="cardSectionContainer">
        <div className="cardSection">
          <div className="cardSectionTitle">Personal/SMB</div>
          <Card data={cardData} />
          <Card data={cardData} />
        </div>
        <div className="cardSection">
          <div className="cardSectionTitle">Enterprise</div>

          <Card data={cardData} />
        </div>
        <div className="cardSection">
          <div className="cardSectionTitle">Tiered packages for Enterprise</div>

          <Card data={cardData} />
          <Card data={cardData} />
          <Card data={cardData} />
        </div>
      </div>
    </div>
  );
};

export default Container;
