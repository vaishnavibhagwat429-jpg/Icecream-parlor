import React from "react";

const Franchise = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Vaishnavi Ice Cream Franchise</h1>
          <p>Start your business with our trusted ice cream brand.</p>
          <button className="btn btn-warning">Apply Now</button>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>

        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-3">
              <h5>Low Investment</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Brand Support</h5>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>High Returns</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Details */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Franchise Details</h2>
          <p>Investment: ₹10–15 Lakhs</p>
          <p>Area Required: 200–500 Sq Ft</p>
          <p>ROI: 12–24 Months</p>
        </div>
      </section>
    </>
  );
};

export default Franchise;