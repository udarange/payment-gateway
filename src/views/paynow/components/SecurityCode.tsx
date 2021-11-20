import { Field, FormikErrors, FormikTouched } from "formik";
import React from "react";

export default function SecurityCode(props: {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}) {
  const { errors, touched } = props;

  return (
    <div className="form-group" style={{ maxWidth: 120 }}>
      <label htmlFor="securityCode">Security Code</label>
      <Field
        name="securityCode"
        className={
          touched.securityCode && errors.securityCode
            ? "form-control is-invalid"
            : "form-control"
        }
        type="text"
        maxlength={3}
      />
      {touched.securityCode && errors.securityCode && (
        <div className="invalid-feedback">{errors.securityCode}</div>
      )}
    </div>
  );
}
