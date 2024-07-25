import React from 'react';

function About() {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      <section className="my-5">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], [Company Name] has been committed to providing top-quality products and services to our customers. Our journey began with a simple idea and has grown into a thriving business that serves thousands of happy customers.
        </p>
      </section>
      <section className="my-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to [mission statement]. We strive to [brief description of goals and how you plan to achieve them].
        </p>
      </section>
      <section className="my-5">
        <h2>Meet the Team</h2>
        <div className="row">
          <div className="col-md-4">
            <img src="team-member-photo-url" alt="Team Member" className="img-fluid rounded-circle" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="col-md-4">
            <img src="team-member-photo-url" alt="Team Member" className="img-fluid rounded-circle" />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          {/* Add more team members as needed */}
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
          <p>"[Testimonial from a satisfied customer]"</p>
          <footer className="blockquote-footer">Customer Name, <cite title="Source Title">Company Name</cite></footer>
        </blockquote>
        {/* Add more testimonials as needed */}
      </section>
      <section className="my-5">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to learn more about our services, please contact us at:
        </p>
        <ul>
          <li>Email: info@company.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main Street, Anytown, USA</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
