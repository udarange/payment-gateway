import { Field, FormikErrors, FormikTouched } from 'formik';
import React from 'react';

export default function CardHolderName(props: { errors: FormikErrors<any>; touched: FormikTouched<any> }) {
  const { errors, touched } = props;

  return (
    <div className="form-group">
      <label htmlFor="cardHolderName">Card Holder Name</label>
      <Field
        name="cardHolderName"
        className={touched.cardHolderName && errors.cardHolderName ? 'form-control is-invalid' : 'form-control'}
        type="text"
        maxlength={50}
      />
      {touched.cardHolderName && errors.cardHolderName && (
        <div className="invalid-feedback">{errors.cardHolderName}</div>
      )}
    </div>
  );
}
