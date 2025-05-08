import React from 'react';
import '../Styles-css/Terms.css';

const Terms = () => {
  return (
    <div className='container'>
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>Welcome to our Rent House Service. Please read the following terms carefully before using our platform.</p>

      <h2>1. Agreement to Terms</h2>
      <p>By accessing or using our services, you agree to be bound by these Terms and Conditions.</p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>You must provide accurate information when registering.</li>
        <li>You are responsible for maintaining the confidentiality of your account.</li>
        <li>You agree to use the service for lawful purposes only.</li>
      </ul>

      <h2>3. Property Listings</h2>
      <ul>
        <li>All listings must be truthful and not misleading.</li>
        <li>We reserve the right to remove any inappropriate or false listings.</li>
      </ul>

      <h2>4. Payments</h2>
      <p>Rent payments or booking fees made through our platform are subject to our payment policies. Refunds, if any, are processed based on individual agreements.</p>

      <h2>5. Termination</h2>
      <p>We reserve the right to terminate or suspend access to our service at any time without notice for any reason.</p>

      <h2>6. Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use of the service indicates acceptance of the updated terms.</p>

      <p>For questions or support, contact us at: <a href="mailto:support@renthouse.com">support@renthouse.com</a></p>
    </div>
    </div>
  );
};

export default Terms;
