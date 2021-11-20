import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { triggerPaymentAction } from "../redux/actions/paynowActions";
import CardNumber from "../components/CardNumber";
import ExpiryMonth from "../components/ExpiryMonth";
import ExpiryYear from "../components/ExpiryYear";
import SecurityCode from "../components/SecurityCode";
import CardHolderName from "../components/CardHolderName";

export default function PaymentForm(): JSX.Element {
  const startYear = new Date().getFullYear();
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
        {({ errors, touched, handleSubmit, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <CardNumber errors={errors} touched={touched} />
            <div className="form-row">
              <ExpiryMonth errors={errors} touched={touched} />
              <ExpiryYear
                errors={errors}
                touched={touched}
                startYear={startYear}
              />
            </div>
            <SecurityCode errors={errors} touched={touched} />
            <CardHolderName errors={errors} touched={touched} />
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
