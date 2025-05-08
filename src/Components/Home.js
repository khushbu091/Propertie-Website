
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../Styles-css/Home.css"; 
import { FaPhoneAlt } from "react-icons/fa";


import img1 from "../Image/home-img01.jpg";
import img2 from "../Image/home-img02.png";

import test1 from "../Image/testimonial-1.jpg"
import test2 from "../Image/testimonial-2.jpg"
import test3 from "../Image/testimonial-3.jpg"

import cart1 from "../Image/property-1.jpg"
import cart2 from "../Image/property-2.jpg"
import cart3 from "../Image/property-3.jpg"
import cart4 from "../Image/11.jpg"

import blog_main from "../Image/Blog-16.jpg"
import blog1 from "../Image/f1.jpg"
import blog2 from "../Image/f2.jpg"
import blog3 from "../Image/f4.jpg"






const properties = [
  { id: 1, name: "Appartment", count: 6, icon: "🏢", highlight: true },
  { id: 2, name: "Commercial", count: 6, icon: "🏬", highlight: true },
  { id: 3, name: "Solo Shop", count: 6, icon: "🛍️", highlight: true },
  { id: 4, name: "Town Ship", count: 3, icon: "🏘️", highlight: true },
  { id: 5, name: "Villa", count: 3, icon: "🏠", highlight: true },
  { id: 6, name: "Warehouse", count: 3, icon: "🏭", highlight: true },
];

const Properties_card = [
  {
    id: 1,
    image: cart1, // Replace with actual image path
    price: "For Rent",
    name: "Spacious Houses Tailored for Comfortable Living",
    location: "Explore our collection of well-maintained houses ideal for families and individuals. From cozy single-family homes to large multi-bedroom residences, we offer flexible rental options in peaceful neighborhoods. ",
    area: "2468 Sq",
    beds: "5 Beds",
    baths: "3 Baths",
    category: "For Sale",
    tag: "House",

  },
  {
    id: 2,
    image: cart2,
    price: "For Rent",
    name: "Elegant Villas for Luxurious Living",
    location: "Experience the charm of spacious, private villas with premium amenities, lush gardens, and serene surroundings — ideal for families, vacations, or upscale living.",
    area: "3468 Sq",
    beds: "2 Beds",
    baths: "3 Baths",
    category: "For Sale",
    tag: "Villa",

  },
  {
    id: 3,
    image: cart3,
    price: "For Rent",
    name: "Warehousing Solutions for Your Business",
    location: "Our warehouses offer high-capacity storage with 24/7 security, ideal for businesses needing flexible, scalable space. Perfect for inventory management, logistics, and industrial use.",
    area: "9598 Sq",
    beds: "2 Beds",
    baths: "4 Baths",
    category: "For Lease",
    tag: "Warehouse",
  },
  {
    id: 4,
    image: cart4,
    price: "For Rent",
    name: "Modern Apartments Designed for Comfort & Convenience",
    location: "Experience modern apartment living with spacious layouts, top-tier amenities, and easy access to schools, shops, and transport—perfect for families, professionals, and students alike.",
    area: "2798 Sq",
    beds: "2 Beds",
    baths: "4 Baths",
    category: "For Rent",
    tag: "Apartment",

  },
];
const categories = ["All Properties", "For Sale", "For Lease", "For Rent"];

const blogs = [
  {
    id: 1,
    title: "Creating Your Entertainment Haven Of Your Dream.",
    date: "FEBRUARY 29, 2024",
    description:
      "Turpis nunc eget lorem dolor sed viverra ipsum nunc. Poteni nullam ac tortor vitae purus...",
    tags: ["City Views", "Concept", "Rooftop Terrace"],
    image: blog_main,
  },
  {
    id: 2,
    title: "Unlocking the Door: Exploring Real Estate Trends and Insights!",
    date: "MARCH 26, 2024",
    description: "Ac ut consequat semper viverra. Facilisi etiam dignissim diam...",
    tags: ["Concept"],
    image:blog1,
  },
  {
    id: 3,
    title: "Tips for Creating Your Perfect Open-Air Haven.",
    date: "MARCH 26, 2024",
    description: "Blandit libero volutpat sed cras ornare arcu odio vivamus...",
    tags: ["Rooftop Terrace"],
    image: blog2,
  },
  {
    id: 4,
    title: "Why Client Consultation Corner Should Be Your First Step",
    date: "MARCH 26, 2024",
    description:
      "Habitasse platea dictumst quisque sagittis purus. Egestas erat imperdiet...",
    tags: ["City Views"],
    image: blog3,
  },
];


const Home = () => {
     
      const [slides, setSlides] = useState([]);

      useEffect(() => {
        fetch("/sliderData.json")
          .then((res) => res.json())
          .then((data) => setSlides(data))
          .catch((error) => console.error("Error loading JSON:", error));
      }, []);
      


      const [selectedCategory, setSelectedCategory] = useState("All Properties");

      const filteredProperties =
      selectedCategory === "All Properties"
        ? properties
        : properties.filter((property) => property.category === selectedCategory);

  return (
    <>
{/*----- -------------------------- Hero Section Start ----------------------------------------------- */}
    <div className="container">
    
     <div className="home-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000}}
        loop={true}
        effect="fade"
        className="home-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay">
                <div className="slide-content">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
 {/*----- -------------------------- Hero Section End ----------------------------------------------- */}
 {/*----- -------------------------- Property Catagory Start ----------------------------------------------- */}

    <div className="property-section">
      <h4 className="newly-listed">NEWLY LISTED</h4>
      <h2 className="heading">Search By Property Requirement</h2>
      <div className="property-container">
        {properties.map((property) => (
          <div
            key={property.id}
            className={`property-card ${property.highlight ? "highlighted" : ""}`}
          >
            <div className="pro-icon">{property.icon}</div>
            <h3>{property.name}</h3>
            <p>{property.count} Properties</p>
            {property.highlight && <span className="view-details">View Details</span>}
          </div>
        ))}
      </div>
    </div>
 {/*----- -------------------------- Property Catagory End----------------------------------------------- */}


   {/*----- -------------------------- Hero Section Start----------------------------------------------- */}     
    <div className="hero-section">
      <div className="hero-images">
        <img src={img1} alt="Luxury House" className="house-img" />
        <img src={img2} alt="Modern Villa" className="villa-img" />
        <div className="ratings">
          <div className="rating-users">
            <img src={test1} alt="User" />
            <img src={test2} alt="User" />
            <img src={test3} alt="User" />
            <span className="more-users">69+</span>
          </div>
          <p>Top Rated around globe</p>
        </div>
      </div>

      <div className="hero-content">
        <h4 className="sub-heading">WORLDWIDE PROPERTIES</h4>
        <h2 className="main-heading">
          Welcome To Our Luxurious Properties, With All The Conveniences.
        </h2>
        <p className="description">
          Arcu ac tortor dignissim convallis aenean et tortor at. Ac turpis egestas
          sed tempus urna et. Quisque eu pellentesque erat, eget bibendum ipsum.
        </p>
        
        <div className="features">
          <div className="feature">
            <span className="icon">❓</span>
            <h3>Answer Questions</h3>
            <p>Phasellus ornare scelerisque eleifend donec pretium nec.</p>
          </div>
          <div className="feature">
            <span className="icon">💬</span>
            <h3>Select a Quote</h3>
            <p>Morbi quis commodo odio aenean fames ac vel sed.</p>
          </div>
          <div className="feature">
            <span className="icon">💼</span>
            <h3>Your Belongings</h3>
            <p>Neque sodales et etiam sit amet nisl purus in mollis.</p>
          </div>
          <div className="feature">
            <span className="icon">🏠</span>
            <h3>Personal Liability</h3>
            <p>Vitae justo eget magna fermentum iaculis lobortis.</p>
          </div>
        </div>

        <div className="buttons">
          <button className="explore-btn">Explore Properties</button>
          <div className="call-btn">
            <FaPhoneAlt className="phone-icon" />
            <span>Call Us Anytime</span>
            <p>+00 123 456789</p>
          </div>
        </div>
      </div>
    </div>

{/*----- -------------------------- property card start ----------------------------------------------- */}         
  <div className="property-section">
      <h3 className="section-subtitle">EXPLORE VILLAS</h3>
      <h2 className="section-title">Comfort Living Solution</h2>

      <div className="property-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

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
    </div>
  {/*----- -------------------------- property card end ----------------------------------------------- */}         
  {/*----- -------------------------- blog section start ----------------------------------------------- */}         

  <section className="home-blog-section">
      <h3 className="home-sub-heading">INSTANT UPDATES</h3>
      <h2 className="home-main-heading">Real Estate Blogs & News</h2>
      <div className="home-blog-container">
        <div className="home-featured-blog">
          <img src={blogs[0].image} alt="Featured Blog" className="home-blog-image" />
          <div className="home-blog-content">
            <div className="home-tag-container">
              {blogs[0].tags.map((tag, index) => (
                <span key={index} className="home-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="home-date">{blogs[0].date}</p>
            <h3 className="home-blog-title">{blogs[0].title}</h3>
            <p className="home-blog-description">{blogs[0].description}</p>
            <a href="#" className="home-read-more">
              Read More →
            </a>
          </div>
        </div>

        <div className="home-blog-list">
          {blogs.slice(1).map((blog) => (
            <div key={blog.id} className="home-blog-card">
              <img src={blog.image} alt="Blog" className="home-blog-card-image" />
              <div className="home-blog-card-content">
                <div className="home-tag-container">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="home-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="home-date">{blog.date}</p>
                <h3 className="home-blog-title">{blog.title}</h3>
                <p className="home-blog-description">{blog.description}</p>
                <a href="#" className="home-read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  {/*----- --------------------------blog section end ----------------------------------------------- */}         

    
    

    </div>    
    </>
  );
};

export default Home;
