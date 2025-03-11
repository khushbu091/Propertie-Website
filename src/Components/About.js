
import React from "react";
import "../Styles-css/About.css"; 
import { FaSmile, FaHome, FaUserTie } from "react-icons/fa";
import { FaPaintBrush, FaCouch, FaTree, FaBuilding, FaTools } from "react-icons/fa";

import about_main from "../Image/thumb-slider-img-1.jpg"
import about_img1 from "../Image/thumb-slider-img-2.jpg"
import about_img2 from "../Image/thumb-slider-img-3.jpg"
import about_img3 from "../Image/thumb-slider-img-4.jpg"

import gallery1 from "../Image/gallery-img-1.jpg"
import gallery2 from "../Image/gallery-img-2.jpg"
import gallery3 from "../Image/gallery-img-2.jpg"
import gallery4 from "../Image/gallery-img-3.jpg"
import gallery5 from "../Image/gallery-img-5.jpg"

const features = [
  { id: "01", title: "Easy To Rent", description: "Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Eu facilisis sed odio.", icon: <FaHome /> },
  { id: "02", title: "Carefully Crafted", description: "Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate quam lacus.", icon: <FaPaintBrush /> },
  { id: "03", title: "In-built Wardrobe", description: "Cras sed felis eget velit aliquet. Vitae congue eu consequat ac felis donec odio.", icon: <FaCouch /> },
  { id: "04", title: "Lavish Greenary", description: "Facilisis volutpat est velit egestas dui id. Diam maecenas sed enim ut sem viverra.", icon: <FaTree /> },
  { id: "05", title: "Spacious Outdoor", description: "Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla pulvinar.", icon: <FaBuilding /> },
  { id: "06", title: "Planned Construction", description: "Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.", icon: <FaTools /> },
];


const images = [
  { src: gallery1, alt: "Modern House" },
  { src: gallery2, alt: "Modern Kitchen" },
  { src:gallery5, alt: "Living Room" },
  { src: gallery4, alt: "Dining Room" },
  { src: gallery3, alt: "Bar Area" },
  { src: gallery1, alt: "Bar Area" },

];

const About = () => {   
  return (
    <>
    <section className="about-hero">
      <div className="about-overlay">
        <div className="about-container">
          <p className="about-location">
            📍 3911 Firestone Blvd, South Gate, CA 90280, United States
          </p>
          <h1 className="about-title">Welcome to Your Next Adventure</h1>
          <p className="about-description">
            Duis imperdiet purus eget tortor ornare, quis malesuada dui pharetra.
            In quis mauris facilisis, pulvinar felis ac, molestie ligula. Mauris
            lacus massa, facilisis ac lacus ac, condimentum vulputate est.
            Vestibulum sit amet felis eu dui accumsan lacinia eget sed orci.
          </p>
          <div className="about-buttons">
            <button className="about-btn about-tour">Take A Tour</button>
            <button className="about-btn about-quote">Get A Quote</button>
          </div>
        </div>
      </div>
    </section>
    <section className="living-section">
      <div className="living-container">
        {/* Left Side: Image */}
        <div className="living-image">
          <img src={about_main} alt="Luxury Pool" />
        </div>

        {/* Right Side: Text & Stats */}
        <div className="living-content">
          <p className="living-subtitle">CONTEMPORARY LIVING</p>
          <h2 className="living-title">
            Experience the Epitome of Refinement and Grandeur in Every Detail Of
            Beauty
          </h2>
          <p className="living-description">
            Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae
            elementum. Turpis egestas pretium aenean pharetra magna ac. Blandit
            massa enim nec dui nunc. Magnis dis parturient montes nascetur
            ridiculus mus mauris.
          </p>

          {/* Statistics Section */}
          <div className="living-stats">
            <div className="stat">
              <FaSmile className="stat-icon" />
              <p className="stat-value">30K</p>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="stat">
              <FaHome className="stat-icon" />
              <p className="stat-value">20K</p>
              <p className="stat-label">Homes Sold</p>
            </div>
            <div className="stat">
              <FaUserTie className="stat-icon" />
              <p className="stat-value">35+</p>
              <p className="stat-label">Agents</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="living-gallery">
            <img src={about_img1} alt="House 1" />
            <img src={about_img2} alt="House 2" />
            <img src={about_img3} alt="House 3" />
            <img src={about_main} alt="House 4" />
          </div>
        </div>
      </div>
    </section>

    <section className="features-section">
      <div className="features-container">
        <p className="features-subtitle">SIGNATURE FEATURES</p>
        <h2 className="features-title">Masterful Design: A Showcase of Quality and Craftsmanship</h2>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-id">{feature.id}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-icon">{feature.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    

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
    </>
  );
};

export default About;
