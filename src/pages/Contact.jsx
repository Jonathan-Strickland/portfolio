import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/manoyebw" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
        <input type="hidden" name="_next" value="localhost:5173" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
}
