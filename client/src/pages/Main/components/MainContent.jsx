import React from "react";
import product from "../../../assets/product0.jpg";
import CardSmall from "../../../components/Cards/CardSmall";

function MainContent() {
  let products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="d-flex flex-wrap">
      {products.map(() => (
        <CardSmall />
      ))}
    </div>
  );
}

export default MainContent;
