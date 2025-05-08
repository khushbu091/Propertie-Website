import React from 'react';
import '../Styles-css/CancellationPolicy.css';

const CancellationPolicy = () => {
  return (
    <div className="cancellation-container">
      <h1>Cancellation Policy</h1>
      <p>We understand that plans can change. Please read our cancellation policy carefully before booking a property through our Rent House Service.</p>

      <h2>1. Guest Cancellations</h2>
      <ul>
        <li>Full refund if cancelled within 24 hours of booking and at least 7 days before check-in.</li>
        <li>50% refund for cancellations made at least 3 days before check-in.</li>
        <li>No refund for cancellations within 3 days of check-in.</li>
      </ul>

      <h2>2. Host Cancellations</h2>
      <ul>
        <li>Hosts must provide at least 7 days’ notice to cancel a reservation.</li>
        <li>Frequent cancellations may lead to penalties or account suspension.</li>
      </ul>

      <h2>3. Force Majeure</h2>
      <p>In the event of natural disasters, emergencies, or government travel restrictions, both guests and hosts may be eligible for full refunds, subject to review.</p>

      <h2>4. Refund Processing</h2>
      <p>Approved refunds will be processed within 7–10 business days to the original payment method.</p>

      <h2>5. Contact Us</h2>
      <p>For cancellation assistance, contact us at: <a href="mailto:support@renthouse.com">support@renthouse.com</a></p>
    </div>
  );
};

export default CancellationPolicy;
