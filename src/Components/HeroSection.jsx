import React from "react";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section>
      <div className="container poppins-light py-4">
        <h4 className="poppins-medium mb-3">
          <span className="text-92 fs-1">Welcome </span>
           , to SheShare Vacation rentals.
        </h4>
        <p className="mb-4">
          Experience the perfect blend of safety, adventure, and community in
          our
          <span className="poppins-medium"> SheShare vacation rentals </span>,
          tailored for <span className="poppins-medium">women</span> travelers
          seeking unforgettable journeys.
        </p>

        <div className="text-center">
          <p>What would you like to do?</p>
          <div className="d-flex gap-5 justify-content-center align-items-center">
            <button className="btn p-4 bttn poppins-medium ">
              Share your room
            </button>
            <a href="/#booking" className="btn p-4 bttn poppins-medium ">
              Rent a room
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
