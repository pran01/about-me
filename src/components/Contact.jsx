import "../styles/Contact.scss";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const sendEmail = () => {
    console.log("Send");
    return;
  };
  return (
    <section id="Contact">
      <div class="contact-container">
        <div class="contact-form">
          <input type="text" class="name" placeholder="Name" />
          <input type="email" class="email" placeholder="Email" />
          <textarea
            type="textarea"
            class="message"
            placeholder="Your Message"
          />
          <button onClick={sendEmail} class="send" type="button">
            Send
          </button>
          {/*
          TODO: 
          Animation for send button
          */}
        </div>
        <div class="profile-links">
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
