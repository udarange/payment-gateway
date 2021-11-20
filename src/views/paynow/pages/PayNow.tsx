import React from "react";

export default function PayNow(): JSX.Element {
  return (
    <div className="container my-5">
      <h1>Pay now</h1>
      <p>It is so easy now to make your payments.</p>
      <div className="row flex-sm-row-reverse">
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div
            className="p-3"
            style={{
              backgroundColor: "antiquewhite",
              borderRadius: "10px",
            }}
          >
            <h2>Your Order</h2>
            <div className="d-flex flex-row justify-content-between">
              <p>Total Amount:</p>
              <p>100 LKR</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 p-2">
          <div
            className="p-3"
            style={{
              backgroundColor: "antiquewhite",
              borderRadius: "10px",
            }}
          >
            xxxx
          </div>
        </div>
      </div>
    </div>
  );
}
