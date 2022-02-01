import React from 'react';
import './footer.css';
import Shape from "./shape-bg.png";
function footer() {
  return(
    <div className="footer-container">
        <div className="footer-parent">
            <img src={Shape} alt="no internet connection" />
        </div>
    </div>
  );
}

export default footer;
