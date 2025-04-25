import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-page">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-grid">
            <div className="project-card">
              <img src="/images/pass.png" alt="Password Gen" />
              <h3>Password Generator</h3>
              <p>A simple Password Generator made with JavaScript.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Jonathan-Strickland/PasswordGen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src="/images/dog.png" alt="Dog Image App" />
              <h3>Dog Image App</h3>
              <p>A responsive gallery using the Dog CEO API.</p>
              <div className="project-links">
                <a
                  href="https://github.com/Jonathan-Strickland/DogApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Add more cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}
