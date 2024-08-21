import React from 'react';
import { motion } from 'framer-motion';
import './History.css';
import featuresImg from './images/features-img.png';
function History() {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5 pad">
        <motion.div
          className="text-center mx-auto pb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ maxWidth: '800px' }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            History of <span className="text-primary">DDU Mesjid</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </motion.div>
        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <motion.div
                className="col-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className="fa fa-trophy fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3">During 2003 - 2006</h5>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="col-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="feature-item">
                  <div className="feature-icon">
                    <span className="fa fa-road fa-2x"></span>
                  </div>
                  <div className="ms-4">
                    <h5 className="mb-3">During 2003 - 2006</h5>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="col-lg-12 col-xl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
           {
            /**
             *  <img src="./images/features-img.png"className="img-fluid w-100" style={{ objectFit: 'cover' }} alt="Img" />
             * 
             */
           }
           <img src={featuresImg}
    className="img-fluid w-100"
    style={{ objectFit: 'cover' }}
    alt="Img"
  />
          </motion.div>
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              <motion.div
                className="col-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">During 2003 - 2006</h5>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-tag fa-2x"></span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="col-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="feature-item justify-content-end">
                  <div className="text-end me-4">
                    <h5 className="mb-3">During 2003 - 2006</h5>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?
                    </p>
                  </div>
                  <div className="feature-icon">
                    <span className="fa fa-map-pin fa-2x"></span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;