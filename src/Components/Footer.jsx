import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid p-0 my-5 ">
      <footer className="text-center text-lg-start border-1 border-top ">
        <div className="container ">
          <section className="">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-2 mx-auto mt-3 poppins-light">
                <h6 className=" mb-4 poppins-medium">
                  <span className="text-92">S</span>he
                  <span className="text-92">S</span>hare
                </h6>
                <p>About Us</p>
                <p >Careers</p>
                <p>Contact Us</p>
              </div>

              <div className=" col-12 col-md-6 col-lg-2  mx-auto mt-3 poppins-light">
                <h6 className=" mb-4 poppins-medium">Support</h6>
                <p>
                  <a>FAQ's</a>
                </p>
                <p>
                  <a>Cancelation Policy</a>
                </p>
              </div>

              <div className="col-12 col-md-6 col-lg-2 p-lg-0 mx-auto mt-3 poppins-light">
                <h6 className=" mb-4  poppins-medium">Become a Host</h6>
                <p>
                  <a>Hoisting Resources</a>
                </p>
                <p>
                  <a>Hoisting Responsibility</a>
                </p>
                <p>
                  <a>Share a Room</a>
                </p>
                <p>
                  <a>Pets</a>
                </p>
              </div>

              <div className="col-12 col-md-6 col-lg-2  mx-auto mt-3 poppins-light">
                <h6 className=" mb-4  poppins-medium">Terms & Privacy</h6>
                <p>
                  <a>Terms & Conditions</a>
                </p>
                <p>
                  <a>Privacy Policy</a>
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="p-3 pt-0 border-1 border-top">
          <div className=" text-center ">
            <div className="p-3">
              © 2024 Copyright : 
                <a href="/" className="text-decoration-none text-92">
                    
                    SheShare.com
                </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
