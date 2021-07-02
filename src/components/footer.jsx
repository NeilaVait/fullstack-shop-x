const Footer = (props) => {
  return (
    <footer className="container">
      <div className="hr"></div>
      <div className="foote-top d-flex space-between">
        <div className="footer__links">Links</div>
        <div className="footer__cta">CTA</div>
      </div>
      <div className="hr"></div>
      <div className="footer-bottom d-flex space-between">
        <div className="footer__copy">Copyright © 2021, Simple. Powered by Shopify</div>
        <div className="footer__cards">Cards</div>
      </div>
    </footer>
  );
};

export default Footer;
