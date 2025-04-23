import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <div className="home-container">
        <div className="profile-card">
          <img
            src="/portfolio/public/images/headshot.jpg"
            alt="Your headshot"
            className="profile-img"
          />
          <h2>Jonathan Strickland</h2>
          <p>Full Stack Software Developer</p>
          <button className="contact-btn">Contact Me</button>
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
            <img src="/portfolio/public/images/python.png" alt="Python" />
            <img src="/portfolio/public/images/html.png" alt="HTML" />
            <img src="/portfolio/public/images/css.png" alt="CSS" />
            <img src="/portfolio/public/images/javascript.png" alt="JavaScript" />
            <img src="/portfolio/public/images/java.png" alt="Java" />
            <img src="/portfolio/public/images/react.png" alt="React" />
            <img src="/portfolio/public/images/node.png" alt="Node.js" />
            <img src="/portfolio/public/images/aws.png" alt="AWS" />
            <img src="/portfolio/public/images/sql.png" alt="SQL" />
            <img src="/portfolio/public/images/mongodb.png" alt="MongoDB" />
            <img src="/portfolio/public/images/figma.png" alt="Figma" />
            <img src="/portfolio/public/images/unity.png" alt="Unity" />
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
            I studied Software Development at Keyin College, where I developed a strong foundation in programming, especially with Java — my favorite language. While I've worked with both SQL and NoSQL databases (including MongoDB), I feel most confident building responsive, user-friendly interfaces.
          </p>
          <p>
            I completed an internship with <strong>Mallax Vision</strong>, and I'm currently working on a Unity project with a couple of close friends. It's been a great way to learn C# and dive deeper into the world of game development.
          </p>
          <p>
            While I'm still early in my journey, nothing beats the feeling of solving a tough problem or watching a feature come to life. I'm currently leveling up my skills in Unity and C#, and I'm excited to keep growing as a game developer.
          </p>
        </div>
      </section>
    </main>
  );
}
