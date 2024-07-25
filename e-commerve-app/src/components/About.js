import React from 'react';
import myImage from './images/my_photo.jpg';

function About() {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <section className="my-5">
        <h2>Meet the Team</h2>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center mb-4">
            <img src={myImage} alt="Amir Alsayed" className="img-fluid rounded-circle mr-3" style={{ width: '100px', marginRight: "10px" }} />
            <div>
              <h3>Amir Alsayed</h3>
              <p>Frontend Developer [React.js]</p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center mb-4">
            <img src={myImage} alt="Amir Alsayed" className="img-fluid rounded-circle mr-3" style={{ width: '100px', marginRight: "10px" }} />
            <div>
              <h3>Amir Alsayed</h3>
              <p>Backend Developer [Flask]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <h2>Our Values</h2>
        <ul>
          <li>Commitment to Quality</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Sustainability</li>
        </ul>
      </section>
      <section className="my-5">
        <h2>Testimonials</h2>
        <blockquote className="blockquote">
          <p>Be our first customer and leave your feedback.</p>
          <footer className="blockquote-footer">Customer Name, <cite title="Source Title">Company Name</cite></footer>
        </blockquote>
      </section>
      <section className="my-5">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our services, please contact us at:</p>
        <ul>
          <li>Email: amiralsayed.work@gmail.com</li>
          <li>Phone: +201555127543</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
