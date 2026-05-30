import React from "react";
import { mobileNumber, email, github, linkedin } from "../../constants/contactConstants";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true" />

      <div className="contact-header">
        <p className="contact-sub-heading">06. Contact</p>
        <h2>GET IN TOUCH</h2>
        <p className="contact-description">
          Open to full-time roles, freelance projects, and collaborations. If you have an opportunity or just want to say hi — reach out!
        </p>
      </div>

      <div className="contact__container">
        <div className="contact__left">
          <h2 className="contact__title">
            Let's build <br />
            something <br />
            <span className="contact__titleAccent">great.</span>
          </h2>

          <p className="contact__desc">
            I'm actively seeking full-time Software Engineer / Frontend Developer roles. Whether you have a project in mind or an opening that fits — I'd love to connect and explore how I can contribute.
          </p>

          <div className="contact__info">
            <a className="contact__email" href={`mailto:${email}`}>
              {email}
            </a>
            <div className="contact__phone">{mobileNumber}</div>
            
            <a
              className="contact__email"
              href="https://www.linkedin.com/in/rohillaabhishek"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "8px", fontSize: "0.95rem" }}
            >
              linkedin.com/in/rohillaabhishek ↗
            </a>
          </div>
        </div>

        <div className="contact__card">
          <form
            className="contact__form"
            action="https://formspree.io/f/mkoeelpl"
            method="POST"
            onKeyDownCapture={(e) => {
              const isField =
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement ||
                e.target instanceof HTMLSelectElement ||
                e.target.isContentEditable;
              if (isField && e.key === " ") e.stopPropagation();
            }}
          >
            <input type="hidden" name="_subject" value="Portfolio Contact — Abhishek Rohilla" />
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <label className="field">
              <span className="field__label">NAME</span>
              <input className="field__input" name="name" placeholder="Your name" required autoComplete="name" />
            </label>

            <label className="field">
              <span className="field__label">EMAIL</span>
              <input className="field__input" type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
            </label>

            <label className="field">
              <span className="field__label">MESSAGE</span>
              <textarea
                className="field__textarea"
                name="message"
                placeholder="Tell me about the role or project…"
                rows={5}
                required
              />
            </label>

            <button type="submit" className="contact__btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      <div className="contact__footer">
        <div className="contact__footerInner">
          <div className="contact__copyright">
            © {new Date().getFullYear()} Abhishek Rohilla. All rights reserved.
          </div>
          <div className="contact__links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${email}`}>Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
