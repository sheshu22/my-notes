import React from "react";

let x = new Date();
let year = x.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>
        <a href="https://github.com/sheshu22">SHESHASENA REDDY</a>
      </p>
    </footer>
  );
}
