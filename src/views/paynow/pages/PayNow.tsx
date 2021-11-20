import React from "react";
import YourOrder from "../components/YourOrder";
import PaymentForm from "../components/PaymentForm";

export default function PayNow(): JSX.Element {
  return (
    <div className="container my-5">
      <h1>Pay Now</h1>
      <p>It is so easy now to make your payments.</p>
      <div className="row flex-sm-row-reverse">
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <YourOrder />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 p-2">
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
