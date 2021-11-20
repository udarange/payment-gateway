import React from "react";
import YourOrder from "../containers/YourOrder";
import PaymentForm from "../containers/PaymentForm";

export default function PayNow(): JSX.Element {
  return (
    <div className="container my-5">
      <div className="d-flex p-0">
        <h1 className="mr-3">Pay Now</h1>
        <img src="https://img.icons8.com/emoji/48/000000/credit-card-emoji.png" />
      </div>
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
