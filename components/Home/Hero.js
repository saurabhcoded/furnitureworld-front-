import Image from "next/image";
import React from "react";
import heroImg2 from "../../assets/heroImg2.png";
import sofaHero from "../../assets/sofahero.png";
import blob from "../../assets/blob.svg";
import chairhero from "../../assets/chairhero.png";
import chairheroR from "../../assets/chairhero-r.png";
import styles from "../../styles/hero.module.css";

const Hero = () => {
  const imgstyle = {
    width: "400px",
  };
  return (
    <div className="vh-100">
      <div className="container row align-items-center  my-auto justify-content-end">
        <div className="col-md-5 order-2 order-sm-1">
          <div className="text">
            <h1 className="fw-bold hero-heading text-danger">Future World</h1>
            <h1 className="fw-bold  hero-subheading">FURNITURE</h1>
            <h1 className="text-secondary">Collection</h1>
            <p
              className="text-justify mt-3 text-secondary"
              style={{ textAlign: "justify" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              laborum quaerat, explicabo exercitationem numquam nulla molestiae
              cum temporibus officia itaque sequi excepturi, ex fugit est
              consectetur atque cupiditate veritatis aliquam harum minus
              expedita deserunt! Maxime.
            </p>
          </div>
          <button className="btn btn-danger px-5 py-2 mt-4 rounded-pill fs-5 fw-bold">
            Shop Now
          </button>
        </div>
        <div className="col-md-6 order-1 order-sm-2 my-4">
          <div style={{ zIndex: "8" }}>
            <Image src={heroImg2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
