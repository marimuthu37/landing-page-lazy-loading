import React, { useState } from 'react';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    destination: '',
    fromDate: '',
    toDate: '',
    travelers: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="book-container">
      <form onSubmit={handleSubmit} className="book-form">
        <h2 className="book-title">Travel Inquiry Form</h2>

        <div className="book-inp-div">
          <label htmlFor="name" className="book-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="book-input"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-inp-div">
          <label htmlFor="number" className="book-label">Number</label>
          <input
            type="number"
            name="number"
            id="number"
            className="book-input"
            min="0"
            placeholder="Enter your contact number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-inp-div">
          <label htmlFor="email" className="book-label">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="book-input"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-inp-div">
          <label htmlFor="destination" className="book-label">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            className="book-input"
            placeholder="Where do you want to go?"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-inp-div">
          <label htmlFor="fromDate" className="book-label">From Date</label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            className="book-input"
            value={formData.fromDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-inp-div">
          <label htmlFor="toDate" className="book-label">To Date</label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            className="book-input"
            value={formData.toDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-inp-div">
          <label htmlFor="travelers" className="book-label">Number of Travelers</label>
          <input
            type="number"
            name="travelers"
            id="travelers"
            className="book-input"
            min="1"
            value={formData.travelers}
            onChange={handleChange}
            required
          />
        </div>

        <div className="book-submit">
          <button type="submit" className="book-button">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
