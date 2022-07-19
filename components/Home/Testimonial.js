import React from "react";
import SingleReview from "./SingleReview";

const Testimonial = () => {
  return (
    <div>
      <div className="container py-5">
        <h5 className="text-center fw-bold  fs-2 mb-5">
          <span className=" border-bottom border-5 border-warning">
            CLIENTS
          </span>{" "}
          REVIEWS
        </h5>
        <div
          id="carouselExampleIndicators"
          className="carousel slide "
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active bg-warning"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="bg-warning"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              className="bg-warning"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <SingleReview />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <SingleReview />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <SingleReview />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
