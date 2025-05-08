import React from 'react';
import '../Styles-css/Policy.css';

const PrivacyPolicy = () => {
  return (
    <div className='container'>
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>At Rent House Service, we value your privacy and are committed to protecting your personal information.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Personal details such as name, email, phone number.</li>
        <li>Property preferences and rental history.</li>
        <li>Usage data including browser type and visit duration.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To communicate important updates or offers.</li>
        <li>To enhance user experience and security.</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do not sell or rent your personal information. We may share data with trusted partners who help us operate our service, under confidentiality agreements.</p>

      <h2>4. Cookies</h2>
      <p>We use cookies to enhance user experience and analyze site traffic. You can disable cookies in your browser settings.</p>

      <h2>5. Data Security</h2>
      <p>We implement security measures to protect your data, including encryption and secure server infrastructure.</p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>You can access or update your personal information anytime.</li>
        <li>You can request deletion of your data by contacting us.</li>
      </ul>

      <h2>7. Changes to this Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

      <p>If you have questions, contact us at: <a href="mailto:privacy@renthouse.com">privacy@renthouse.com</a></p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
