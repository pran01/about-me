import "../styles/Contact.scss";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import emailjs from "emailjs-com";
import apiKey from "../config/emailkey";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };
  return (
    <section id="Contact">
      <div className="contact-container">
        <p className="contact-heading">Get in touch</p>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Email"
            name="from_email"
          />
          <textarea
            type="textarea"
            className="message"
            placeholder="Your Message"
            name="message"
          />
          <button className="send" type="submit">
            Send
          </button>
          {/*
          TODO: 
          Animation for send button
          */}
        </form>
        <div className="profile-links">
          <a
            href="https://www.linkedin.com/in/pranav-sinha/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin className="logo" />
          </a>
          <a href="https://github.com/pran01" target="_blank" rel="noreferrer">
            <FaGithub className="logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
