import makenisLogo from "../../images/Makenis_Logo-01.svg";

export default function Footer(){
  return (
    <footer className="footer-section" id="footer-section">
      <div className="footer-container">
        <div className="footer-contact-wrap flex">
          <div className="footer-item" id="footer-logo">
            <img src={makenisLogo} alt="Travel with Makenis" />
            <p>Striving to serve our customers at the best possible ways.</p>
          </div>
          <div className="footer-item" id="contact-details">
            <h2>CONTACT US</h2>
            <span className="contact-info">
              <p>+255-764-172-973</p>
              <p>info@makenis.com</p>
              <p>Dar Free Market Mall, Office F-32, First Floor.<br /> Ali Hassan Mwinyi Road, Oysterbay </p>
            </span>
          </div>
          <div className="footer-item align-items" id="social-links">
            <h2>OUR OTHER BUSINESSES</h2>
            <h4><a href="https://risetravelstz.com">RISE TRAVELS</a></h4>
          </div>
        </div>
      </div>
      <div className="copy-info flex items-center">
        <small>&copy; 2022 Makenis. All Rights Reserved.</small>
      </div>
    </footer>
  );
}