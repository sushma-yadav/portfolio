import React from "react";
import Icons from "./Icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <Icons />
      </div>

      <h4>ThankYou 😉</h4>
      <p>Sushma Yadav 2024</p>
    </div>
  );
}
