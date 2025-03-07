
import property_img from "../Image/ab.jpg"
import { FaHeadset, FaSearch, FaBolt, FaClipboardCheck, FaTrophy, FaIdCard } from "react-icons/fa";
import React from "react";
import "../Styles-css/About.css"; 

const About = () => {
    const values = [
        {
          icon: <FaHeadset />,
          title: "Excellent Customer Service",
          description: "We provide 24/7 support and ensure customer satisfaction at all times."
        },
        {
          icon: <FaSearch />,
          title: "Attention to Detail",
          description: "Every project is handled with precision and care to meet the highest standards."
        },
        {
          icon: <FaBolt />,
          title: "Quick Response",
          description: "Our team ensures fast and effective solutions to your queries and concerns."
        },
        {
          icon: <FaClipboardCheck />,
          title: "Years of Experience",
          description: "With over a decade in the industry, we bring expertise and knowledge to every task."
        },
        {
          icon: <FaTrophy />,
          title: "Leader in the Industry",
          description: "We have been recognized as a top company in our field for excellence and innovation."
        },
        {
          icon: <FaIdCard />,
          title: "Certified and Licensed",
          description: "Our business is fully certified, ensuring compliance with industry regulations."
        }
      ];
    
  return (
    <>
    <div className="container">
    <section className="about-section">
      <div className="about-overlay">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
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

    <section className="values-section">
      <h2 className="values-title">Our shared company values have been our north star</h2>
      <p className="values-subtitle">
        Our commitment to excellence is reflected in our values. We strive to provide the best services possible.
      </p>

      <div className="values-grid">
        {values.map((item, index) => (
          <div key={index} className="value-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="about-property">
      <h2> About Our Property Services</h2>
      <p>
        At <strong>[Your Website Name]</strong>, we make buying, selling, and renting properties a seamless experience. 
        Whether you're looking for a luxury villa, a budget-friendly apartment, or a commercial space, 
        we have a wide range of listings to match your needs.
      </p>

      <h3> Why Choose Us?</h3>
      <ul>
        <li>✅ <strong>Verified Properties:</strong> 100% authentic listings with detailed information.</li>
        <li>✅ <strong>Best Price Guarantee:</strong> Competitive market rates with no hidden charges.</li>
        <li>✅ <strong>Expert Assistance:</strong> Professional real estate agents to guide you.</li>
        <li>✅ <strong>Easy Financing:</strong> Get connected with mortgage and loan providers.</li>
      </ul>

      <h3> Our Services</h3>
      <ul>
        <li>🔹 <strong>Buy & Sell Properties:</strong> Hassle-free transactions with top deals.</li>
        <li>🔹 <strong>Rent & Lease:</strong> Find the perfect home or tenant with ease.</li>
        <li>🔹 <strong>Investment Advisory:</strong> Expert guidance for profitable property investments.</li>
        <li>🔹 <strong>Legal Support:</strong> Secure your transactions with legal assistance.</li>
      </ul>

      <p className="contact-info">📞 <strong>Contact us today to find your dream property!</strong></p>
    </section>
    </div>
    </>
  );
};

export default About;
