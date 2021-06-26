import "../styles/Contact.scss";

import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";

import emailjs from "emailjs-com";
import apiKey from "../config/emailkey";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    const nameField = document.querySelectorAll(".sender-name")[0];
    const emailField = document.querySelectorAll(".sender-email")[0];
    const messageField = document.querySelectorAll(".sender-message")[0];
    const sendBtn = document.querySelector(".send");

    console.log(nameField.value);

    if (nameField.value && emailField.value && messageField.value) {
      sendBtn.classList.toggle("active");
      emailjs
        .sendForm(
          apiKey.SERVICE_ID,
          apiKey.TEMPLATE_ID,
          e.target,
          apiKey.USER_ID
        )
        .then(
          (result) => {
            sendBtn.classList.toggle("active");
            alert("Message Sent, We will get back to you shortly", result.text);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            sendBtn.classList.toggle("active");
            alert("An error occurred, Please try again", error.text);
          }
        );
    } else {
      alert("Please fill out all the details before sending the mail");
    }
  };
  return (
    <section id="Contact">
      <div className="contact-container">
        <p className="contact-heading">Get in touch</p>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            className="sender-name"
            placeholder="Name"
            name="from_name"
            value={name}
            onChange={changeName}
          />
          <input
            type="email"
            className="sender-email"
            placeholder="Email"
            name="from_email"
            value={email}
            onChange={changeEmail}
          />
          <textarea
            type="textarea"
            className="sender-message"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={changeMessage}
          />
          <button className="send" type="submit">
            <FaTelegramPlane className="send-icon" />

            <span>Send</span>
          </button>
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
