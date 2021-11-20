import React from "react";
import { useHistory } from "react-router-dom";

export default function Checkout(): JSX.Element {
  const history = useHistory();

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ marginTop: "20%" }}
    >
      <h3 style={{ lineHeight: "40px" }}>100 LKR</h3>
      <button
        className="btn btn-outline-info w-100"
        style={{ maxWidth: 200 }}
        onClick={() => history.push("/pay")}
      >
        Pay Now
      </button>
    </div>
  );
}
