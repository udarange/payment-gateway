import React from "react";
import YourOrder from "../containers/YourOrder";
import PaymentForm from "../containers/PaymentForm";

export default function PayNow(): JSX.Element {
  return (
    <div className="row flex-sm-row-reverse">
      <div className="col-lg-4 col-md-6 col-sm-12 p-2">
        <YourOrder />
      </div>
      <div className="col-lg-8 col-md-6 col-sm-12 p-2">
        <PaymentForm />
      </div>
    </div>
  );
}
