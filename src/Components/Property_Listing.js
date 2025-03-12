import React, { useState } from "react";

import "../Styles-css/Property_Listing.css";

import cart1 from "../Image/property-1.jpg"
import cart2 from "../Image/property-2.jpg"
import cart3 from "../Image/property-3.jpg"
import cart4 from "../Image/property-4.jpg"
const Properties_card = [
    {
      id: 1,
      image: cart1, // Replace with actual image path
      price: "$148,000",
      name: "Oakwood Manor Estates",
      location: "25945 Washington Street, ID 1651612",
      area: "2468 Sq",
      beds: "5 Beds",
      baths: "3 Baths",
      category: "For Sale",
      tag: "House",
  
    },
    {
      id: 2,
      image: cart2,
      price: "$148,000",
      name: "Willowbrook Grey Estate",
      location: "75835 Herta Walks, Indonesia, ID 796326",
      area: "2468 Sq",
      beds: "2 Beds",
      baths: "3 Baths",
      category: "For Sale",
      tag: "Villa",
  
    },
    {
      id: 3,
      image: cart3,
      price: "$128,000",
      name: "Timberland Interior Legacy",
      location: "6621 Sammy Gateway, Japan, JP 65651",
      area: "2598 Sq",
      beds: "2 Beds",
      baths: "4 Baths",
      category: "For Lease",
      tag: "Warehouse",
    },
    {
      id: 4,
      image: cart4,
      price: "$128,000",
      name: "Cedar Ridge Residences",
      location: "760 Isidro Knolls, Japan, JP 165561",
      area: "2598 Sq",
      beds: "2 Beds",
      baths: "4 Baths",
      category: "For Rent",
      tag: "Apartment",
  
    },
    {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
      {
        id: 4,
        image: cart4,
        price: "$128,000",
        name: "Cedar Ridge Residences",
        location: "760 Isidro Knolls, Japan, JP 165561",
        area: "2598 Sq",
        beds: "2 Beds",
        baths: "4 Baths",
        category: "For Rent",
        tag: "Apartment",
    
      },
  ];
  
const PropertyListings = () => {
   
        const [currentPage, setCurrentPage] = useState(1);
        const totalPages = 5;
      
        const handlePrev = () => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        };
      
        const handleNext = () => {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        };
  return (
    <div className="property-listings">
      <section className="hero">
        <h1>Property Listings</h1>
        <p>Home - Property Listings</p>
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Enter Keyword" className="search-input" />
                <select className="search-select">
                <option>Property Type</option>
                <option>Property Type</option>
                <option>Property Type</option>
                <option>Property Type</option>

                </select>
                <input type="text" placeholder="Location" className="search-input location-input" />
                <button className="search-button">Search Property</button>
            </div>
        </div>
      </section>
      <div className="home-property-list">
        {Properties_card.map((property) => (
          <div className="home-property-card" key={property.id}>
            <img src={property.image} alt={property.name} className="property-image" />
            <span className="property-price">{property.price}</span>
            {property.tag && <span className="property-tag">{property.tag}</span>}
            <div className="property-info">
              <h3 className="property-name">{property.name}</h3>
              <p className="property-location">{property.location}</p>
              <div className="property-details">
                <span>{property.area}</span>
                <span>{property.beds}</span>
                <span>{property.baths}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
      <button className="pagination-btn" onClick={handlePrev} disabled={currentPage === 1}>
        &#8592;
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button className="pagination-btn" onClick={handleNext} disabled={currentPage === totalPages}>
        &#8594;
      </button>
    </div>
    </div>
    
  );
};

export default PropertyListings;