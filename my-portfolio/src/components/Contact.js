import React from "react";
import styles from "../styles/Contact.module.css";  // Importing CSS Module
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <section className={styles["contact-container"]}>
      <div className={styles["contact-header"]}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for collaborations or just a friendly hello!</p>
      </div>
      <form className={styles["contact-form"]}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required />

        <Button variant="warning" type="submit">Send</Button>
      </form>

    </section>
  );
}

export default Contact;
