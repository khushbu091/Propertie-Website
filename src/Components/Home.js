import React from "react";
import property_img from "../Image/about.jpg"
import "../Styles-css/Home.css"; // Your custom CSS file
import img1 from "../Image/icon-apartment.png";
import img2 from "../Image/icon-building.png";
import img3 from "../Image/icon-condominium.png";
import img5 from "../Image/icon-house.png";
import img6 from "../Image/icon-villa.png";
import img8 from "../Image/icon-neighborhood.png";
import img9 from "../Image/icon-housing.png";
import img10 from "../Image/icon-luxury.png";

import pro1 from "../Image/property-1.jpg";
import pro2 from "../Image/property-2.jpg";
import pro3 from "../Image/property-3.jpg";
import pro4 from "../Image/property-4.jpg";
import pro5 from "../Image/property-5.jpg";
import pro6 from "../Image/property-6.jpg";

import { FaPhoneAlt } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import agent from "../Image/call-to-action.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import team1 from "../Image/team-1.jpg";
import team2 from "../Image/team-2.jpg";
import team3 from "../Image/team-3.jpg";
import team4 from "../Image/team-4.jpg";

import testimonial1 from "../Image/testimonial-1.jpg";
import testimonial2 from "../Image/testimonial-2.jpg";
import testimonial3 from "../Image/testimonial-3.jpg";
import testimonial4 from "../Image/testimonial-4.jpg";
import { useRef } from "react";

const properties_card = [
  {
    id: 1,
    image: pro1,
    type: "Apartment",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    area: "1000 Sqft",
    beds: 3,
    baths: 2,
    status: "For Sell",
  },
  {
    id: 2,
    image:  pro2,
    type: "Villa",
    price: "$12,345",
    title: "Golden Urban House For Rent",
    location: "123 Street, New York, USA",
    area: "1000 Sqft",
    beds: 3,
    baths: 2,
    status: "For Rent",
  },
  {
    id: 3,
    image:  pro3,
    type: "Office",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    area: "1000 Sqft",
    beds: 3,
    baths: 2,
    status: "For Sell",
  },
  {
    id: 4,
    image:  pro4,
    type: "Office",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    area: "1000 Sqft",
    beds: 3,
    baths: 2,
    status: "For Sell",
  },
  {
    id: 5,
    image:  pro5,
    type: "Office",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    area: "1000 Sqft",
    beds: 3,
    baths: 2,
    status: "For Sell",
  },
  {
    id: 6,
    image:  pro6,
    type: "Office",
    price: "$12,345",
    title: "Golden Urban House For Sell",
    location: "123 Street, New York, USA",
    area: "1000 Sqft",
    beds: 3,
    baths: 2,
    status: "For Sell",
  },
];

const agents = [
  {
    name: "Full Name",
    designation: "Designation",
    image: team1,
  },
  {
    name: "Full Name",
    designation: "Designation",
    image: team2,
  },
  {
    name: "Full Name",
    designation: "Designation",
    image:team3,
  },
  {
    name: "Full Name",
    designation: "Designation",
    image:team4,
  },
];
const testimonials = [
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    image: testimonial1,
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    image: testimonial2,
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    image: testimonial3,
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    image: testimonial4,
    name: "Client Name",
    profession: "Profession",
  },
];

const Home = () => {
    const properties = [
        { name: "Apartment", count: 123, image: img1 },
        { name: "Villa", count: 123, image: img6 },
        { name: "Home", count: 123, image: img5 },
        { name: "Office", count: 123, image: img9 },
        { name: "Building", count: 123, image: img2 },
        { name: "Townhouse", count: 123, image: img8 },
        { name: "Shop", count: 123, image: img3 },
        { name: "Garage", count: 123, image: img10 },
      ];
    
      const sliderRef = useRef(null);

      const slideLeft = () => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: -370, behavior: "smooth" }); // Smooth left slide
        }
      };
    
      const slideRight = () => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 370, behavior: "smooth" }); // Smooth right slide
        }
      };
    
  
  return (
    <>
    <div className="container">
        <div className="banner_slide">
           <div className="slider">
             <div className="overlay">
               <div className="hero-content">
                    <h1 className="logo-text">WB</h1>
                    <h2>WARREN BEHAN</h2>
                    <p>PERSONAL REAL ESTATE CORPORATION</p>
                    <button className="hero-btn">View My Listings</button>
                </div>
             </div>
           </div>
        </div>

        <div className="search-container">
        <div className="search-box">
            <input type="text" placeholder="Search Keyword" />
            <select>
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            </select>
            <select>
            <option>Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            </select>
            <button>Search</button>
        </div>
    </div>
    <section className="property-types">
      <h2>Property Types</h2>
      <p>
        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem
        kasd vero ipsum sit eirmod sit.
      </p>
      <div className="property-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <div className="property-image"><img src={property.image} alt={property.name} /></div>
            <h3>{property.name}</h3>
            <p className="property-count">{property.count} Properties</p>
          </div>
        ))}
      </div>
    </section>
    <div className="property-section">
      {/* Left Side: Image */}
      <div className="property-home-image">
        <img src={property_img} alt="Property" />
      </div>

      {/* Right Side: Content */}
      <div className="property-content">
        <h2>#1 Place To Find The Perfect Property</h2>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
          Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>
        <ul>
          <li>Tempor erat elitr rebum at clita</li>
          <li>Aliqu diam amet diam et eos</li>
          <li>Clita duo justo magna dolore erat amet</li>
        </ul>
        <a href="#" className="property-button">
          Read More
        </a>
      </div>
    </div>

    <div className="real-estate-container">
      <h2>Property Listing</h2>
      <p>
        Eirmod sed ipsum dolor sit rebun labore magna erat. Tempor ut dolore
        lorem kasd vero ipsum sit eirmod sit diam justo sed rebun.
      </p>
      <div className="real-estate-filters">
        <button className="filter-btn active-filter">Featured</button>
        <button className="filter-btn">For Sell</button>
        <button className="filter-btn">For Rent</button>
      </div>
      <div className="real-estate-grid">
        {properties_card.map((property) => (
          <div key={property.id} className="real-estate-card">
            <div className="real-estate-image">
              <img src={property.image} alt={property.title} />
              <span
                className={`real-estate-status ${property.status.replace(
                  " ",
                  "-"
                )}`}
              >
                {property.status}
              </span>
            </div>
            <div className="real-estate-details">
              <span className="real-estate-type">{property.type}</span>
              <h3>{property.title}</h3>
              <p className="real-estate-price">{property.price}</p>
              <p className="real-estate-location">📍 {property.location}</p>
              <div className="real-estate-meta">
                <span>📏 {property.area}</span>
                <span>🛏 {property.beds} Bed</span>
                <span>🛁 {property.baths} Bath</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="contact-agent-container">
      <div className="contact-agent-card">
        <div className="contact-agent-image">
          <img src={agent} alt="Agent" />
        </div>
        <div className="contact-agent-content">
          <h2>Contact With Our Certified Agent</h2>
          <p>
            Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero
            ipsum sit sit diam justo sed vero dolor duo.
          </p>
          <div className="contact-agent-buttons">
            <button className="call-btn">
              <FaPhoneAlt className="icon" /> Make A Call
            </button>
            <button className="appointment-btn">
              <BsCalendarCheck className="icon" /> Get Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
    <section className="agents-wrapper">
      <h2 className="agents-heading">Property Agents</h2>
      <p className="agents-subtext">
        Eirmod sed ipsum dolor sit rebun labore magna erat. Tempor ut dolore lorem kasd vero
        ipsum sit eirmod sit. Ipsum diam justo sed rebun vero dolor duo.
      </p>
      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div className="agent-item" key={index}>
            <img src={agent.image} alt={agent.name} className="agent-photo" />
            <div className="agent-details">
              <div className="agent-social">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
              </div>
              <h3 className="agent-name">{agent.name}</h3>
              <p className="agent-role">{agent.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    <section className="testimonial-section">
      <h2 className="testimonial-title">Our Clients Say!</h2>
      <p className="testimonial-subtitle">
        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
      </p>
      <div className="testimonial-container">
        <button className="slider-btn left" onClick={slideLeft}>
          <FaArrowLeft />
        </button>
        <div className="testimonial-list" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-client">
                <img src={testimonial.image} alt={testimonial.name} className="client-photo" />
                <div>
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-profession">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={slideRight}>
          <FaArrowRight />
        </button>
      </div>
    </section>

    </div>    
    </>
  );
};

export default Home;
