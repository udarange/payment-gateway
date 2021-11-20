import { Field, FormikErrors, FormikTouched } from "formik";
import React from "react";

export default function ExpiryMonth(props: {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}) {
  const { errors, touched } = props;

  return (
    <div className="form-group col-6">
      <label htmlFor="expiryMonth" className="text-nowrap">
        Expiration Month
      </label>
      <Field
        name="expiryMonth"
        as="select"
        multiple={false}
        className={
          touched.expiryMonth && errors.expiryMonth
            ? "form-control is-invalid"
            : "form-control"
        }
      >
        <option value={0}>--</option>
        <option value={1}>01</option>
        <option value={2}>02</option>
        <option value={3}>03</option>
        <option value={4}>04</option>
        <option value={5}>05</option>
        <option value={6}>06</option>
        <option value={7}>07</option>
        <option value={8}>08</option>
        <option value={9}>09</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
      </Field>
      {touched.expiryMonth && errors.expiryMonth && (
        <div className="invalid-feedback">{errors.expiryMonth}</div>
      )}
    </div>
  );
}
