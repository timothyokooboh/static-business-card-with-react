import photo from "../images/photo.png";
import email from "../images/Mail.png";
import linkedin from "../images/linkedin.png";

const BusinessCardHeader = () => {
  return (
    <header className="header">
      <img src={photo} alt="user" />
      <section class="header-main-content">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <h3>laurasmith.website</h3>
        <div className="social-links">
          <button className="btn btn-email">
            <img src={email} alt="email" />
            <span>Email</span>
          </button>
          <button className="btn btn-linkedin">
            <img src={linkedin} alt="email" />
            <span>LinkedIn</span>
          </button>
        </div>
      </section>
    </header>
  );
};

export default BusinessCardHeader;
