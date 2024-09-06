import { useState } from "react";

export default function Description({ shirt }) {
  return (
    <div className="description">
      <Title shirt={shirt} />
      <p>
        T-shirt with deferent colors cut classic,made of smooth and soft cotton.
      </p>
      <h4>
        $ 99.00 <span>-25%</span>
      </h4>
      <h5>$ 135.00 </h5>
      <h4>CHOOSE SIZE</h4>
      <div className="size">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </div>
      <button>ADD TO BAG</button>
    </div>
  );
}

function Title({ shirt }) {
  return (
    <div>
      {shirt === 1 && (
        <>
          <div> BLACK T-Shirt</div>
          <h3>BLACK T-shirt fit for MAN</h3>
        </>
      )}{" "}
      {shirt === 2 && (
        <>
          <div> BLUE T-Shirt</div>
          <h3 className="title-blue">BLUE T-shirt fit for MAN</h3>
        </>
      )}{" "}
      {shirt === 3 && (
        <>
          <div> YELLOW T-Shirt</div>
          <h3 className="title-yellow">YELLOW T-shirt fit for MAN</h3>
        </>
      )}
    </div>
  );
}
