import React from "react";
import "../Styles-css/Contact.css";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="hero">
        <h1>Contact us</h1>
        <p className="contact-p">Have questions, feedback, or need assistance? We’re here to help! Fill out the form below, and our team will get back to you as soon as possible. You can also reach us directly via email or phone for urgent inquiries. We look forward to hearing from you!</p> 
      </section>
     <div className="contact-container">
      <div className="contact-info">
        <h2 className="contact-heading">To Know More About Properties</h2>
        <div className="contact-details">
          <div className="info-item">           
            <div>
              <h4><FaMapMarkerAlt  className="contact-icon"/>Our Address </h4>
              <p>291 Roderick Wells, <br/>UK, Connecticut, 08429.</p>
            </div>
            
            <div>
              <h4><FaMobileAlt  className="contact-icon"/>Contact Us</h4>
              <p>+(000) 123-456-789</p>
              <p>+(000) 1234-56789</p>
            </div>
          </div>
          
          <div className="info-item">
            <div>
              <h4><FaEnvelope  className="contact-icon"/>  Email Us</h4>
              <p>info@example.com</p>
              <p>contact@example.com</p>
            </div>
            <div>
              <h4><FaClock  className="contact-icon"/> Working Hours</h4>
              <p>Mon-Fri: 8 AM - 5 PM</p>
              <p>Sat-Sun: 8 AM - 2 PM</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name*" required />
            <input type="email" placeholder="Email*" required />
          </div>
          <div className="form-group">
            <input type="date" placeholder="Desired date*" required />
            <input type="time" placeholder="Desired time" />
          </div>
          <div className="form-group">
            <textarea placeholder="Additional Message" className="textarea"></textarea>
          </div>
          <button type="submit" className="cont-btn">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
