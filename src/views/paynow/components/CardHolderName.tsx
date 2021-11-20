import { Field, FormikErrors, FormikTouched } from "formik";

export default function CardHolderName(props: {
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}) {
  const { errors, touched } = props;

  return (
    <div className="form-group">
      <label htmlFor="cardHolderName">Card Holder Name</label>
      <Field
        name="cardHolderName"
        className={
          touched.cardHolderName && errors.cardHolderName
            ? "form-control is-invalid"
            : "form-control"
        }
        type="text"
      />
      {touched.cardHolderName && errors.cardHolderName && (
        <div className="invalid-feedback">{errors.cardHolderName}</div>
      )}
    </div>
  );
}
