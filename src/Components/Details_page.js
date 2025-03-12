import React from "react";
import "../Styles-css/Details_page.css";
import { FaBath, FaBed, FaCar, FaExpandArrowsAlt, FaHome, FaRoad } from "react-icons/fa";
import detail_img from "../Image/Property-Listing-01.jpg"

import gallery1 from "../Image/gallery-img-1.jpg"
import gallery2 from "../Image/gallery-img-2.jpg"
import gallery3 from "../Image/gallery-img-2.jpg"
import gallery4 from "../Image/gallery-img-3.jpg"
import gallery5 from "../Image/gallery-img-5.jpg"

import tab_img from "../Image/tab-img.png"

const images = [
    { src: gallery1, alt: "Modern House" },
    { src: gallery2, alt: "Modern Kitchen" },
    { src:gallery5, alt: "Living Room" },
    { src: gallery4, alt: "Dining Room" },
    { src: gallery3, alt: "Bar Area" },
    { src: gallery1, alt: "Bar Area" },
  
  ];


const floorPlans = [
    {
      id: 1,
      title: "Basement",
      size: "2300 SqFt",
      rooms: "2 Room",
      baths: "1 Baths",
      price: "$165,000",
      image: tab_img,
      description: "Habitasse platea dictumst quisque sagittis purus sit...",
    },
    {
      id: 2,
      title: "Ground Floor",
      size: "2868 SqFt",
      rooms: "3 Room",
      baths: "2 Baths",
      price: "$248,000",
      image: tab_img,
      description: "Risus quis varius quam quisque. Vitae suscipit tellus...",
    },
    {
      id: 3,
      title: "First Floor",
      size: "3368 SqFt",
      rooms: "4 Room",
      baths: "4 Baths",
      price: "$318,000",
      image: tab_img,
      description: "Dignissim convallis aenean et tortor at...",
    },
    {
      id: 4,
      title: "Second Floor",
      size: "3598 SqFt",
      rooms: "5 Room",
      baths: "5 Baths",
      price: "$368,000",
      image: tab_img,
      description: "Ultrices neque ornare aenean euismod elementum nisi...",
    },
  ];

const Details_page = () => {



  return (
    <>
      <section className="hero">
        <h1>Property Details</h1>
        <p>Home - Property Details Page</p> 
      </section>

    {/* Property Image */}
    <div className="details-page-container">
        <img
          src={detail_img} // Replace with your actual image path
          alt="Luxury Property"
          className="details-page-image"
        />

        {/* Details Card */}
        <div className="details-page-card">
          <div className="details-page-item">
            <FaHome className="details-page-icon" />
            <span className="details-page-label">PROPERTY TYPE</span>
            <h3 className="details-page-text">Apartment</h3>
          </div>
          <div className="details-page-item">
            <FaExpandArrowsAlt className="details-page-icon" />
            <span className="details-page-label">SPACIOUS LIFE</span>
            <h3 className="details-page-text">2468 Sq</h3>
          </div>
          <div className="details-page-item">
            <FaBed className="details-page-icon" />
            <span className="details-page-label">NO OF BEDROOM</span>
            <h3 className="details-page-text">5 Beds</h3>
          </div>
          <div className="details-page-item">
            <FaCar className="details-page-icon" />
            <span className="details-page-label">LISTED PROPERTIES</span>
            <h3 className="details-page-text">2 Parking</h3>
          </div>
          <div className="details-page-item">
            <FaBath className="details-page-icon" />
            <span className="details-page-label">NO OF BATHROOM</span>
            <h3 className="details-page-text">3 Baths</h3>
          </div>
        </div>
      </div>
      <div className="gallery-container">
      <div className="gallery-text">
        <h5>MARVELLOUS WORLD</h5>
        <h2>An Image Speaks Volumes: Explore the Exhibition.</h2>
        <p>
          Ut felis sem, placerat vel sollicitudin ut, mollis non dui. Donec
          vehicula scelerisque mauris facilis.
        </p>
        <button className="view-button">View All Photos</button>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
    <div className="floor-plans">
      <h3 className="floor-plans-subtitle">SPACE SOLUTIONS</h3>
      <h2 className="floor-plans-title">Dive into the Floor Plans.</h2>

      <div className="floor-plans-grid">
        {floorPlans.map((plan) => (
          <div className="floor-plan-card" key={plan.id}>
            <div className="floor-plan-header">
              <span className="floor-plan-badge">{plan.title}</span>
              <div className="floor-plan-info">
                <span>{plan.size}</span>
                <span>{plan.rooms}</span>
                <span>{plan.baths}</span>
                <span className="floor-plan-price">{plan.price}</span>
              </div>
            </div>

            <div className="floor-plan-content">
              <img src={plan.image} alt={plan.title} className="floor-plan-image" />
              <p className="floor-plan-description">{plan.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Details_page;
