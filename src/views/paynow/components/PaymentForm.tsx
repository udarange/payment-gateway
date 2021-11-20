import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { triggerPaymentAction } from "../redux/actions/paynowActions";

export default function PaymentForm(): JSX.Element {
  const startYear = new Date().getFullYear();
  // @ts-ignore
  const yearList = [...Array(11).keys()].map((i) => i + startYear);
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: 0,
    expiryYear: 0,
    securityCode: "",
  };

  const yupSchema = Yup.object().shape({
    cardHolderName: Yup.string().required("Card holder name required"),
    cardNumber: Yup.number()
      .typeError("Invalid Number")
      .required("Card number required"),
    expiryMonth: Yup.number().min(1, "Expiry month required"),
    expiryYear: Yup.number().min(startYear, "Expiry year required"),
    securityCode: Yup.string()
      .required("CVN required")
      .matches(/^\d+$/, "Invalid CVN")
      .min(3, "Invalid CVN")
      .max(4, "Invalid CVN"),
  });

  return (
    <div
      className="p-3"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        border: "1px solid #e9ecef",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={yupSchema}
        onSubmit={(values, { resetForm }) => {
          const cardType = "visa";
          const amount = 100;
          const currency = "LKR";
          const merchantId = "SAB6328932323";
          dispatch(
            triggerPaymentAction({
              ...values,
              cardNumber: parseInt(values.cardNumber),
              securityCode: parseInt(values.securityCode),
              expiryMonth: parseInt(String(values.expiryMonth)),
              expiryYear: parseInt(String(values.expiryYear)),
              cardType,
              amount,
              currency,
              merchantId,
            })
          );
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          setTouched,
          handleSubmit,
          handleBlur,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            {console.log("+++++++++>", errors)}
            {console.log("--------->", values)}
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
            <div className="form-row">
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
            </div>
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
              />
              {touched.securityCode && errors.securityCode && (
                <div className="invalid-feedback">{errors.securityCode}</div>
              )}
            </div>
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
            <div className="d-flex flex-row justify-content-between">
              <button
                className="w-100 btn btn-secondary"
                style={{ maxWidth: 120 }}
                onClick={() => {
                  resetForm({});
                  history.push("/");
                }}
                type="button"
              >
                Cancel
              </button>
              <button
                className="w-100 btn btn-primary"
                style={{ maxWidth: 120 }}
                type="submit"
              >
                Pay
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
