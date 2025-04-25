import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <div className="home-container">
        <div className="profile-card">
          <img
            src="/images/headshot.png"
            alt="Your headshot"
            className="profile-img"
          />
          <h2>Jonathan Strickland</h2>
          <p>Full Stack Software Developer</p>
          <Link to="/contact">
            <button className="contact-btn">Contact Me</button>
          </Link>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/jonathan-strickland-6468b4332/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Jonathan-Strickland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/jonny.strickland.2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      
        <div className="skills-section">
          <h3>Languages & Frameworks</h3>
          <div className="skills-grid">
            <img src="/images/python.png" alt="Python" />
            <img src="/images/html.png" alt="HTML" />
            <img src="/images/css.png" alt="CSS" />
            <img src="/images/javascript.png" alt="JavaScript" />
            <img src="/images/java.png" alt="Java" />
            <img src="/images/react.png" alt="React" />
            <img src="/images/node.png" alt="Node.js" />
            <img src="/images/aws.png" alt="AWS" />
            <img src="/images/sql.png" alt="SQL" />
            <img src="/images/mongodb.png" alt="MongoDB" />
            <img src="/images/figma.png" alt="Figma" />
            <img src="/images/unity.png" alt="Unity" />
          </div>
        </div>
      </div>
      <section className="about-me">
        <div>
          <h2>About Me</h2>
          <p>
            My name is Jonathan Strickland, I am a passionate full stack developer with a focus on backend and a dream to break into the game development world. I grew up playing video games and always knew I wanted to build my own one day.
          </p>
          <p>
            I studied Software Development at Keyin College, where I've learnt back-end development with languages like Python, Java and JavaScript, and also front-end development with JavaScript, HTML, CSS and Figma.
          </p>
          <p>
            I am also working on a project that I am taking the time to learn myself in Unity, which is also helping me build skills in game development, as that is my long term goal as a developer.
          </p>
          <p>
            While I'm still early in my journey, I push my self to learn something new everyday and working towards being the best developer I can.
          </p>
        </div>
      </section>
    </main>
  );
}
