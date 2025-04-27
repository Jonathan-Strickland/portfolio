import './Badges.css';

export default function Badges() {
  return (
    <section className="badges-section">
      <h2>Certifications & Badges</h2>
      <div className="badge-grid">
      <div className="badge-card">
          <img
            src="/images/awscert2.png"
            alt="AWS Cloud Foundations"
          />
          <p>AWS Academy Cloud Foundations</p>
          <p>Certification of Completion</p>
          <p>Issued 11/27/2024</p>
          <a
              href="https://www.credly.com/badges/21545e0c-cbd3-40e4-bf53-a57d447711ae/print"
              target="_blank"
              rel="noopener noreferrer"
            >Digital Badge</a>
        </div>
        <div className="badge-card">
          <img
            src="/images/aws-foundations.png"
            alt="AWS Cloud Foundations"
          />
          <p>AWS Academy Cloud Foundations Badge</p>
        </div>
        <div className="badge-card">
          <img
            src="/images/awscert1.png"
            alt="AWS Cloud Foundations"
          />
          <p>AWS Academy Cloud Developing</p>
          <p>Certification of Completion</p>
          <p>Issued 03/24/2025</p>
          <a
              href="https://www.credly.com/badges/5c1ad4f1-f295-4603-ab22-1182f468f0b5/print"
              target="_blank"
              rel="noopener noreferrer"
            >Digital Badge</a>
        </div>
        <div className="badge-card">
          <img
            src="/images/aws-developing.png"
            alt="AWS Cloud Developing"
          />
          <p>AWS Academy Cloud Developing</p>
        </div>
        <div className="ai-badge-card">
          <img
            src="/images/ai.png"
            alt="Introduction to Generative Artificial Intelligence"
          />
          <p>Introduction to Generative Artificial Intelligence</p>
          <p>Certification of Completion</p>
          <p>Issued on 04/17/2024</p>
        </div>
        {/* Add more badges as needed */}
      </div>
    </section>
  );
}

