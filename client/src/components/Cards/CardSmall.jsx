import React from "react";
import imageProduct from "../../assets/product0.jpg";

function CardSmall() {
  return (
    <div className="card col-2 m-3" style={{ width: "18rem" }}>
      <img src={imageProduct} className="card-img-top" alt="product" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CardSmall;
