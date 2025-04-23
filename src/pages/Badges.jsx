import './Badges.css';

export default function Badges() {
  return (
    <section className="badges-section">
      <h2>Certifications & Badges</h2>
      <div className="badge-grid">
        <div className="badge-card">
          <img
            src="/portfolio/public/images/aws-foundations.png"
            alt="AWS Cloud Foundations"
          />
          <p>AWS Academy Cloud Foundations</p>
        </div>
        <div className="badge-card">
          <img
            src="/portfolio/public/images/aws-developing.png"
            alt="AWS Cloud Developing"
          />
          <p>AWS Academy Cloud Developing</p>
        </div>
        {/* Add more badges as needed */}
      </div>
    </section>
  );
}

