import React from "react";
import "../Styles-css/BuySale.css";
import h1 from "../Image/property-1.jpg";
import h2 from "../Image/property-2.jpg";
import h3 from "../Image/property-3.jpg";
import h4 from "../Image/property-4.jpg";
import h5 from "../Image/property-5.jpg";
import h6 from "../Image/property-6.jpg";
const BuySale = () => {
  const properties = [
    {
      id: 1,
      name: "Royal Inn",
      price: "$234,900",
      img: h1, 
      status: "Sold",
      features: [5, 2, 2, 1],
    },
    {
      id: 2,
      name: "Royal Inn",
      price: "$234,900",
      img: h2,
      status: "Sold",
      features: [5, 2, 2, 1],
    },
    {
      id: 3,
      name: "Royal Inn",
      price: "$234,900",
      img: h3,
      status: "Sold",
      features: [5, 2, 2, 1],
    },
    {
        id: 4,
        name: "Royal Inn",
        price: "$234,900",
        img: h4,
        status: "Sold",
        features: [5, 2, 2, 1],
      },
      {
        id: 5,
        name: "Royal Inn",
        price: "$234,900",
        img: h5,
        status: "Sold",
        features: [5, 2, 2, 1],
      },
      {
        id: 6,
        name: "Royal Inn",
        price: "$234,900",
        img: h6,
        status: "Sold",
        features: [5, 2, 2, 1],
      },
  ];

  return (
    <>
      <section className="hero">
        <h1>Property Listing Types</h1>
        <p>Home - Property Listings</p> 
      </section>
    <div className="buy-sale-container">
      {/* Sidebar */}
      <div className="search-filters">
        <h2>🔍 Search for</h2>
        <input type="text" placeholder="Search of Properties" />
        <select>
          <option>Buy</option>
          <option>Rent</option>
        </select>
        <select>
          <option>Price</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select>
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Office</option>
          <option>Home</option>
          <option>Singlex</option>
          <option>Duplex</option>
          <option>Flat</option>
          <option>Banglo</option>
        </select>
        <button className="search-button">Find Now</button>

        <h3>Hot Properties</h3>
        <div className="hot-properties-list">
          <div className="hot-property-item">
            <img src={h1} alt="Hot Property" />
            <div>
              <p>Integer sed porta quam</p>
              <span>$300,000</span>
            </div>
          </div>
          <div className="hot-property-item">
            <img src={h2} alt="Hot Property" />
            <div>
              <p>Integer sed porta quam</p>
              <span>$300,000</span>
            </div>
          </div>
          <div className="hot-property-item">
            <img src={h3} alt="Hot Property" />
            <div>
              <p>Integer sed porta quam</p>
              <span>$300,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Property List */}
      <div className="property-Buy-Sale">
        <p>Showing: 12 of 100</p>
        <select className="sort-options">
          <option>Sort by</option>
        </select>

        <div className="buysale-card-wrapper">
          {properties.map((property) => (
            <div className="buysale-card" key={property.id}>
              <img src={property.img} alt={property.name} />
              <span className="buysale-status">{property.status}</span>
              <h3>{property.name}</h3>
              <p>Price: {property.price}</p>
              <div className="buysale-features">
                {property.features.map((feature, index) => (
                  <span key={index}>{feature}</span>
                ))}
              </div>
              <button className="details-button">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default BuySale;
