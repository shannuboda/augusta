import React from "react";
import "../css/subpagescss/contact.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
function ContactUs() {
  return (
    <div>
      <div className="contactbanner">
        <h3>Contact Us</h3>
        <p>Home . Contact Us</p>
      </div>

      <div className="contact_1">
        <Card style={{ width: "20rem" ,margin:'3rem'}} className="contact_1_2">
          <Card.Body className="mycontactcard">
            <div className="card_body_icon">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#e2123c" }}
                className="phniconnew"
              />
            </div>
            <div className="card_body_content">
              <Card.Title>Call Now</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                8500554714
              </Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      
        <Card style={{ width: "20rem",margin:'3rem' }} className="contact_1_2">
          <Card.Body className="mycontactcard">
            <div className="card_body_icon">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "#e2123c" }}
                className="phniconnew"
              />
            </div>
            <div className="card_body_content">
              <Card.Title>Location</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Flat No:202, Cyber Residency, Indira Nagar, Gacchibowli, Hyderabad, Telengana
              </Card.Subtitle>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem",margin:'3rem' }} className="contact_1_2">
          <Card.Body className="mycontactcard">
            <div className="card_body_icon">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#e2123c" }}
                className="phniconnew"
              />
            </div>
            <div className="card_body_content">
              <Card.Title>Email Now</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                agastaaviation1@gmail.com
              </Card.Subtitle>
            </div>
          </Card.Body>
        </Card>


      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3806.3816067430703!2d78.35733657421079!3d17.441440101247604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709302151741!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }} /* Pass the style as a JavaScript object */
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form className="conform">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          CONTACT US!!!!!
        </h1>
        <div className="form-row" style={{ padding: "4rem" }}>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">First Name</label>
            <input
              type="text"
              className="form-control form1"
              id="inputFirstName"
              placeholder="First Name"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <input
              type="text"
              className="form-control form1"
              id="inputPassword4"
              placeholder="Last Name"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Your Email Address</label>
            <input
              type="text"
              className="form-control form1"
              id="inputemail"
              placeholder="Email"
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Phone Number</label>
            <input
              type="text"
              className="form-control form1"
              id="inputphn"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div
          className="form-group"
          style={{ padding: "4rem", marginTop: "-9rem" }}
        >
          <label htmlFor="inputAddress">Subject</label>
          <input
            type="text"
            className="form-control form1"
            id="inputAddress"
            placeholder="Your Subject"
          />
        </div>
        <div
          className="form-group"
          style={{ padding: "4rem", marginTop: "-9rem" }}
        >
          <label htmlFor="inputAddress2">Your Message</label>
          <input
            type="textarea"
            className="form-control form1"
            id="inputAddress2"
            placeholder="Your Message"
          />
          <button
            type="submit"
            className="btn btn-primary mybtn"
            style={{ margin: "2rem" }}
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
