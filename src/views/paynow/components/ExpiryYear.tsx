import { Field, FormikErrors, FormikTouched } from "formik";
import React from "react";

export default function ExpiryYear(props: {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  startYear: number;
}) {
  const { errors, touched, startYear } = props;
  // @ts-ignore
  const yearList = [...Array(11).keys()].map((i) => i + startYear);

  return (
    <div className="form-group col-6">
      <label htmlFor="expiryYear">Expiration Year</label>
      <Field
        name="expiryYear"
        as="select"
        multiple={false}
        className={
          touched.expiryYear && errors.expiryYear
            ? "form-control is-invalid"
            : "form-control"
        }
      >
        <option value={0}>----</option>
        {yearList.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </Field>
      {touched.expiryYear && errors.expiryYear && (
        <div className="invalid-feedback">{errors.expiryYear}</div>
      )}
    </div>
  );
}
