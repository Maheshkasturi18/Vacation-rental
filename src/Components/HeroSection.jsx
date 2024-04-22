import React,{useState} from "react";
// import { Link } from "react-router-dom";

export default function HeroSection() {
  const [roomformData, setRoomFormData] = useState({
    name: "",
    contact: "",
    address: "",
    rating: "",
    price: "",
    message: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetRoomFormData = () => {
    setRoomFormData({
      name: "",
      contact: "",
      address: "",
      rating: "",
      price: "",
      message: "",
      images: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Data saved successfully!");
    //  reset form
    resetRoomFormData();
  };

  return (
    <section>
      <div className="container poppins-light py-4">
        <h4 className="poppins-medium mb-3">
          <span className="text-92 fs-1">Welcome </span>, to SheShare Vacation
          rentals.
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
            <button
              className="btn p-4 bttn poppins-medium "
              data-bs-toggle="modal"
              data-bs-target="#egstaticBackdrop"
            >
              Share your room
            </button>
            <a href="/#booking" className="btn p-4 bttn poppins-medium ">
              Rent a room
            </a>
          </div>
        </div>
        {/* modal form */}
        <div
          class="modal fade"
          id="egstaticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered justify-content-center">
            <div class="modal-content w-100">
              <div class="modal-header border-0">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body ">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 d-grid">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="p-1"
                      value={roomformData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <label htmlFor="contact">Contact No:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="p-1"
                      value={roomformData.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <label htmlFor="address">Location/Address:</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="p-1"
                      value={roomformData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <label htmlFor="rating">Rating:</label>
                    <input
                      type="text"
                      id="rating"
                      name="rating"
                      className="p-1"
                      value={roomformData.rating}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 d-grid">
                    <label htmlFor="price">Price per night:</label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      className="p-1"
                      value={roomformData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 d-grid">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      className="p-1"
                      value={roomformData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 d-grid">
                    <label htmlFor="images">Images:</label>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      className="p-1"
                      value={roomformData.images}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div class="modal-footer border-0">
                    <button class="btn bttn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
