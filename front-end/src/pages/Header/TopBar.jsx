import React from 'react';
import './Header.css'

const TopBar = () => {
  return (
    <>
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
      <div className="container">
        <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
          <div className="col-lg-6 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-muted me-4" style={
                {
                  fontWeight:'bold',
                  color:'#EA001E',
                  fontSize:'1.2rem'
                }
              }>
              ﷽ 
              </a>
              <a href="tel:+251977611301" className="text-muted me-4">
                <i className="fas fa-phone-alt text-primary me-2"></i>
                +251977611301
              </a>
              <a href="mailto:example@gmail.com" className="text-muted me-0">
                <i className="fas fa-envelope text-primary me-2"></i>
                kevenmubarek@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://t.me/your_telegram_username" className="btn btn-light btn-sm-square rounded-circle me-0" target="_blank">
             <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default TopBar;
/*
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDMgFlr_X23njwzSL1cRWtHt6QWny3K_c2Q&s' alt="" style={{
                    width: '100px',
                    height: '30px',
                    borderRadius: '8px',
                    transition: 'transform 0.3s',
                  }}/> */