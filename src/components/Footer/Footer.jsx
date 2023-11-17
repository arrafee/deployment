import "./index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="info-footer">
          <div className="info-contact">
            <h2 className="footer-item" style={{ fontSize: 28 }}>
              ARSHA
            </h2>
            <p className="address">
              A018 Adam Street <br /> New York, NY 535022 <br /> United States
            </p>
            <p className="contact">
              <b>Phone: </b> +1 5589 55488 55 <br />
              <b>Email: </b> info@example.com
            </p>
          </div>
          <div className="links">
            <h3 className="footer-item">Useful Links</h3>
            <ul className="links-list">
              <li className="footer-link-item">
                <a href="" className="link-item">
                  Home
                </a>
              </li>
              <li className="footer-link-item">
                <a href="" className="link-item">
                  About Us
                </a>
              </li>
              <li className="footer-link-item">
                <a href="" className="link-item">
                  Services
                </a>
              </li>
              <li className="footer-link-item">
                <a href="" className="link-item">
                  Terms of Service
                </a>
              </li>
              <li className="footer-link-item">
                <a href="" className="link-item">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="services">
            <h3 className="footer-item">Our Services</h3>
            <ul className="services-list">
              <li className="service-item">
                <a href="" className="link-item">
                  Web Design
                </a>
              </li>
              <li className="service-item">
                <a href="" className="link-item">
                  Web Development
                </a>
              </li>
              <li className="service-item">
                <a href="" className="link-item">
                  Product Management
                </a>
              </li>
              <li className="service-item">
                <a href="" className="link-item">
                  Marketing
                </a>
              </li>
              <li className="service-item">
                <a href="" className="link-item">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div className="social-network">
            <h3 className="footer-item">Our Social Network</h3>
            <p className="social-desc">
              Cras fermentum odio eu feugiat lide par <br /> naso tierra videa
              magna derita valies
            </p>
            <div className="social-media">
              <div className="item-media" />
              <div className="item-media" />
              <div className="item-media" />
              <div className="item-media" />
              <div className="item-media" />
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="copyrigt">
            © Copyright <b>Arsha</b>. All Right Reserved
          </p>
          <p className="designmade">
            Design by <span className="text-blue">BootstrapMade</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
