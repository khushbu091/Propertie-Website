import React, { useState } from "react";
import "../Styling-css/Add_property_form.css";

const Add_property_form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Add New Property </h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Property Type:</label>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Type of Property </option>
          <option value="house">House</option>
          <option value="office">Office</option>
          <option value="villa">Villa</option>
          <option value="farm house">Farm House</option>
          <option value="flat">Flat</option>
          <option value="singlex">Singlex</option>
          <option value="duplex">Duplex</option>
          <option value="other">Other</option>
        </select>

        <label>Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        <label>Location</label>
        <input type="map" name="location" accept="location" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Add_property_form;
