import { Field, FormikErrors, FormikTouched } from "formik";
import React from "react";

export default function CardNumber(props: {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}) {
  const { errors, touched } = props;

  return (
    <div className="form-group">
      <label htmlFor="cardNumber">Card Number</label>
      <Field
        name="cardNumber"
        className={
          touched.cardNumber && errors.cardNumber
            ? "form-control is-invalid"
            : "form-control"
        }
        type="text"
      />
      {touched.cardNumber && errors.cardNumber && (
        <div className="invalid-feedback">{errors.cardNumber}</div>
      )}
    </div>
  );
}
