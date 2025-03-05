import React from "react";
import "../Styles-css/Contact.css";

const ContactSection = () => {
  return (
    <>
    <div className="container">
    <section className="about-section">
      <div className="about-overlay">
       <h1 className="contact__title ">Contact</h1>
       <p>
       "Have any questions or need assistance? We’re here to help! Feel free to reach out through our contact form, email, or phone. Our team will get back to you as soon as possible. You can also visit us at our office or connect with us on social media."
       </p>
      </div>
    </section>
    <div className="contact__container">
      <div className="contact__wrapper">
        

        <div className="contact__info">
          <div className="contact__info-box">
            <i className="fa fa-map-marker-alt contact__icon"></i>
            <span>123 Street, New York, USA</span>
          </div>

          <div className="contact__info-box">
            <i className="fa fa-envelope-open contact__icon"></i>
            <span>info@example.com</span>
          </div>

          <div className="contact__info-box">
            <i className="fa fa-phone-alt contact__icon"></i>
            <span>+012 345 6789</span>
          </div>
        </div>

        <div className="contact__content">
          <iframe
            className="contact__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          <form className="contact__form">
            <p className="contact__form-text">
              The contact form is currently inactive. Get a functional and working contact form
              with Ajax & PHP in a few minutes.
            </p>

            <div className="contact__form-group">
              <input type="text" className="contact__input" placeholder="Your Name" />
              <input type="email" className="contact__input" placeholder="Your Email" />
            </div>

            <input type="text" className="contact__input" placeholder="Subject" />

            <textarea className="contact__textarea" placeholder="Message"></textarea>

            <button type="submit" className="contact__button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactSection;
