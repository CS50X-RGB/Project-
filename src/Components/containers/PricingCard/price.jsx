import React from "react";
import './price.css';

const Prices=(props) => {
    return( 
        <div className="main" >
        <div className="card" style={{
          backgroundImage: `url(${props.photo_icon})`
        }}>
          <div className="card-content">
            <h2 className="card-title">Something awesome</h2>
            <p className="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
            <a href= "{props.href}" className="button">
              Click Here
            </a>
          </div>
        </div>
      </div>
    )
}

export default Prices