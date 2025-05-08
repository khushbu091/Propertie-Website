// import React, { useState, useEffect} from "react";
import "../Styles-css/Service.css"; 
import houseImg from "../Image/11.jpg";
import houseImg1 from "../Image/12.jpg";
import houseImg2 from "../Image/13.jpg";
import houseImg3 from "../Image/14.jpg";
import houseImg4 from "../Image/15.jpg";
import houseImg5 from "../Image/16.jpg";


const Service=()=>{
        
        
          // const [currentImage, setCurrentImage] = useState(0);
          //   useEffect(() => {
          //   const interval = setInterval(() => {
          //     setCurrentImage((prev) => (prev + 1) % images.length);
          //   }, 5000);
          //   return () => clearInterval(interval);
          // }, []);
    return(
        <>
         <div className="container">
         <div className="hero-container">
            <div className="hero-overlay">
            <h3 className="head-title">Our Services</h3>
              <h3 className="trust-badge">MOST TRUSTED</h3>
              <h1 className="hero-title">
                Perfect Firm For Rent, Selling Or Leasing Houses, Flats, And Villas
              </h1>
              {/* <div className="search-box">
                <div className="search-options">
                  <label><input type="radio" name="property" /> For Lease</label>
                  <label><input type="radio" name="property" /> For Rent</label>
                  <label><input type="radio" name="property" /> For Sale</label>
                </div>
                <div className="search-fields">
                  <input type="text" placeholder="Enter Keyword" />
                  <select>
                    <option>Property Type</option>
                  </select>
                  <input type="text" placeholder="Location" />
                  <button className="search-button">Search Property</button>
                </div>
              </div>*/}
              <div className="stats"> 
                <span className="stats-pro">🏠 Over 2M Properties</span>
                <span  className="stats-pro">😀 46,789 people happy</span>
                <span  className="stats-pro">⭐⭐⭐⭐⭐ 4.8 Top rated by People</span>
              </div>
            </div>
          </div>
          <div className="house-service">
          <div className="house-image">
            <img src={houseImg} alt="House" />
          </div>
          <div className="house-content">
            <h2>Apartment Rent Service</h2>
            <h3>Comfortable Living with All Premium Amenities</h3>
            <p>
            Discover a perfect blend of style and convenience in this spacious 2BHK apartment located in a prime city neighborhood. Featuring fully furnished rooms, modular kitchen, high-speed Wi-Fi, 24/7 security, and nearby access to shopping, dining, and public transit — it's ideal for working professionals and small families looking for a hassle-free lifestyle.
            </p>
            <div className="house-buttons">
              <a href="tel:+1234567890" className="btn call-btn">Call Now</a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="house-service">
          <div className="house-image">
            <img src={houseImg1} alt="House" />
          </div>
          <div className="house-content">
            <h2>SmartSpace Rentals</h2>
            <h3>Find Your Perfect Commercial Space – Hassle-Free, Affordable, Reliable</h3>
            <p>
            At SmartSpace Rentals, we specialize in connecting businesses with the ideal commercial properties for rent. Whether you're launching a startup, expanding your office, or opening a new storefront, we offer flexible rental solutions in prime locations. Browse, book, and move in with ease – your next business location is just a few clicks away.           
            </p>
            <div className="house-buttons">
              <a href="tel:+1234567890" className="btn call-btn">Call Now</a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="house-service">
          <div className="house-image">
            <img src={houseImg2} alt="House" />
          </div>
          <div className="house-content">
            <h2>Solo Shop – Rent Smarter, Live Better</h2>
            <h3>Your one-stop solution for hassle-free rentals.</h3>
            <p>
            Solo Shop offers a seamless way to rent homes, apartments, and commercial spaces without the usual stress. Browse verified listings, connect with property owners directly, and enjoy transparent pricing—all in one easy-to-use platform.            
            </p>
            <div className="house-buttons">
              <a href="tel:+1234567890" className="btn call-btn">Call Now</a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="house-service">
          <div className="house-image">
            <img src={houseImg3} alt="House" />
          </div>
          <div className="house-content">
            <h2>Discover Premium Living in Our Modern Townships</h2>
            <h3>Find Your Perfect Rental Home with Comfort, Security & Style</h3>
            <p>
            Welcome to our exclusive township rental services—where comfort meets convenience. Whether you're looking for a spacious apartment, a cozy villa, or a modern duplex, we offer a wide range of well-maintained rental properties in secure, family-friendly townships. Enjoy amenities like parks, parking, 24/7 security, and nearby schools, all in one place. Let us help you find a rental home that fits your lifestyle and budget effortlessly.            
            </p>
            <div className="house-buttons">
              <a href="tel:+1234567890" className="btn call-btn">Call Now</a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="house-service">
          <div className="house-image">
            <img src={houseImg4} alt="House" />
          </div>
          <div className="house-content">
            <h2>Luxury Villas for Rent</h2>
            <h3>Find Your Perfect Escape in a Dream Villa</h3>
            <p>
            Discover handpicked luxury villas available for short and long-term rentals. Whether you're planning a weekend getaway, a family vacation, or a remote work retreat, our curated collection offers breathtaking views, private pools, and the comfort of home in paradise. Book with ease and experience unmatched privacy, elegance, and personalized service.            
            </p>
            <div className="house-buttons">
              <a href="tel:+1234567890" className="btn call-btn">Call Now</a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="house-service">
          <div className="house-image">
            <img src={houseImg5} alt="House" />
          </div>
          <div className="house-content">
            <h2>Reliable & Secure Warehouse Rentals</h2>
            <h3>Flexible Storage Solutions for Every Business</h3>
            <p>
            Discover affordable, scalable warehouse spaces tailored to your storage, distribution, and logistics needs. Whether you're a small business or a large enterprise, our secure facilities and customizable rental plans make it easy to manage your inventory with confidence.
            </p>
            <div className="house-buttons">
              <a href="tel:+1234567890" className="btn call-btn">Call Now</a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
         </div>
        
        </>
    )
}
export default Service;

