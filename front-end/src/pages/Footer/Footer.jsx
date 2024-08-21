import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
  <div className="row g-5">
    {/* Left Column */}
    <div className="col-md-4 d-flex justify-content-start">
      <div className="footer-item d-flex flex-column">
        <h4 className="text-white mb-4">About Us</h4>
        <p className="mb-3">
          Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing . we have to make it a little big long in order to make our website beautiful
        </p>
        
      </div>
    </div>

    {/* Center Column */}
    <div className="col-md-4 d-flex justify-content-center">
      <div className="footer-item d-flex flex-column">
        <h4 className="text-white mb-4">Quick Links</h4>
        <a href="#"><i className="fas fa-angle-right me-2"></i> About</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Cars</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Car Types</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Team</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Contact us</a>
        <a href="#"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</a>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-md-4 d-flex justify-content-end">
      <div className="footer-item d-flex flex-column">
        <h4 className="text-white mb-4">Contact Info</h4>
        <a href="#"><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
        <a href="mailto:info@example.com"><i className="fas fa-envelope me-2"></i> info@example.com</a>
        <a href="tel:+01234567890"><i className="fas fa-phone me-2"></i> +012 345 67890</a>
        <a href="tel:+01234567890" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a>
        <div className="d-flex">
          <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-facebook-f text-white"></i></a>
          <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-twitter text-white"></i></a>
          <a className="btn btn-secondary btn-md-square rounded-circle me-3" href=""><i className="fab fa-instagram text-white"></i></a>
          <a className="btn btn-secondary btn-md-square rounded-circle me-0" href=""><i className="fab fa-linkedin-in text-white"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
  <div className="container">
    <div className="row g-4 align-items-center justify-content-center">
      <div className="col-md-6 text-center">
        <span className="text-body">
          <a href="#" className="border-bottom text-white">
            <i className="fas fa-copyright text-light me-2"></i>DDU.Mesjid
          </a>, All rights reserved.
        </span>
      </div>
    </div>
  </div>
</div>
      {/* Copyright End */}
    </>
  );
}

export default Footer;