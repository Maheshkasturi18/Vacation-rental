import React, { useState, useEffect } from "react";

export default function VacationBooking() {
  // date and search data
  const [bookingData, setbookingData] = useState({
    checkInDate: "",
    checkOutDate: "",
    destination: "",
  });

  const Changehandler = (e) => {
    const { name, value } = e.target;
    setbookingData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // create profile form modal

  const [formData, setFormData] = useState({
    interest: "",
    hobbie: "",
    age: "",
    smoker: "",
    sharestory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetFormData = () => {
    setFormData({
      interest: "",
      hobbie: "",
      age: "",
      smoker: "",
      sharestory: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userProfileData", JSON.stringify(formData));
    console.warn("Form submitted and data saved:", formData);
    window.alert("Data saved successfully!");

    //  reset form
    resetFormData();
  };

  useEffect(() => {
    const savedData = localStorage.getItem("userProfileData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      // removing form data when page is loaded
      localStorage.removeItem("userProfileData");
    }
  }, []);

  return (
    <>
      <section className="py-5 booking" id="booking">
        <div className="container poppins-light">
          <h4 className="mb-4 text-center">Book Your Vacation Plan !!!</h4>
          <div className="calendar d-flex justify-content-between align-items-center flex-lg-row gap-lg-0 flex-column px-2 py-4 p-md-4 gap-4 mx-auto px-lg-3 py-lg-4  rounded-3 ">
            <div className="d-flex gap-1 gap-md-3 ">
              <div className="d-grid gap-1">
                <label className="text-secondary">Check In </label>
                <input
                  type="date"
                  name="checkInDate"
                  className="rounded-3 p-1 p-md-2 border border"
                  value={bookingData.checkInDate}
                  onChange={Changehandler}
                />
              </div>
              <div className="d-grid gap-1">
                <label className="text-secondary">Check Out </label>
                <input
                  type="date"
                  name="checkOutDate"
                  className="rounded-3 p-1 p-md-2 border border"
                  value={bookingData.checkOutDate}
                  onChange={Changehandler}
                />
              </div>
            </div>
            <div>
              <div class="input-group border border rounded-3">
                <input
                  type="search"
                  name="destination"
                  id="form1"
                  class="p-md-3 p-2 border-0  rounded-3"
                  placeholder="Search your Destination"
                  value={bookingData.destination}
                  onChange={Changehandler}
                />

                <button type="button" class="btn ">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            <button
              id="createprofile"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="btn bttn  p-2 px-md-4 py-md-3 rounded-3 text-secondary"
            >
              Create Profile
            </button>

            {/* modal form */}
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered justify-content-center">
                <div class="modal-content">
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
                      <div>
                        <label htmlFor="interest">Interests:</label>
                        <input
                          type="text"
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="hobbie">Hobbies:</label>
                        <input
                          type="text"
                          id="hobbie"
                          name="hobbie"
                          value={formData.hobbie}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="age">Age:</label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label>Smoker:</label>
                        <div>
                          <label htmlFor="smoker">
                            <input
                              type="radio"
                              name="smoker"
                              value="Yes"
                              checked={formData.smoker === "Yes"} // Check if "Yes" is selected
                              onChange={handleChange}
                            />
                            Yes
                          </label>
                        </div>
                        <div>
                          <label htmlFor="smoker">
                            <input
                              type="radio"
                              name="smoker"
                              value="No"
                              checked={formData.smoker === "No"} // Check if "No" is selected
                              onChange={handleChange}
                            />
                            No
                          </label>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="sharestory">Personal Story:</label>
                        <textarea
                          id="sharestory"
                          name="sharestory"
                          value={formData.sharestory}
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
        </div>
      </section>

      <section className="py-5 city poppins-regular">
        <div className="container">
          <div class="row ">
            <div class="col-md-4 mb-4 mb-sm-0">
              <a href="/" class="card border border-0 text-decoration-none">
                <img src="images/bombay.jpg" class="card-img-top" alt="..." />
                <div class="card-body px-0">
                  <h5 class="card-title">Mumbai, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-4 ">
              <a href="/" class="card border border-0 text-decoration-none">
                <img
                  src="images/ahemdabad.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body px-0">
                  <h5 class="card-title">Ahemdabad, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-4 ">
              <a href="/" class="card border border-0 text-decoration-none">
                <img src="images/bhopal.jpg" class="card-img-top" alt="..." />
                <div class="card-body px-0">
                  <h5 class="card-title">Bhopal, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <a href="/" class="card border border-0 text-decoration-none">
                <img
                  src="images/bangalore.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body px-0">
                  <h5 class="card-title">Bengalore, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <a href="/" class="card border border-0 text-decoration-none">
                <img src="images/delhi.jpg" class="card-img-top" alt="..." />
                <div class="card-body px-0">
                  <h5 class="card-title">Delhi, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <a href="/" class="card border border-0 text-decoration-none">
                <img src="images/patna.jpg" class="card-img-top" alt="..." />
                <div class="card-body px-0">
                  <h5 class="card-title">Patna, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-4 ">
              <a href="/" class="card border border-0 text-decoration-none">
                <img src="images/varanasi.jpg" class="card-img-top" alt="..." />
                <div class="card-body px-0">
                  <h5 class="card-title">Varanasi, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4 mb-3">
              <a href="/" class="card border border-0 text-decoration-none">
                <img src="images/kolkata.jpg" class="card-img-top" alt="..." />
                <div class="card-body px-0">
                  <h5 class="card-title">Kolkata, India</h5>

                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
            <div class="col-md-4  mb-3">
              <a href="/" class="card border border-0 text-decoration-none">
                <img
                  src="images/hyderabad.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body px-0">
                  <h5 class="card-title">Hyderabad, India</h5>
                  <p>
                    Starting from <span className="fw-semibold"> ₹ 3000/-</span>
                    night
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
