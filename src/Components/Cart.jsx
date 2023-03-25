import React from "react";
import "./cssCard.scss";

const Cart = () => {
  return (
    <div className="card">
      <h1 className="card--h1">Testimonials</h1>
      <div className="card__center">
        <img
          src="https://datnguyen602.github.io/Bai1/Avatar.png"
          alt=""
          className="card__center--avt"
        />
        <div className="card__center--content">
          <h1>John Fang</h1>
          <a href="#">wordfaang.com</a>
          <p>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
