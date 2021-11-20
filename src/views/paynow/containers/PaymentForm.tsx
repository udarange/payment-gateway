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
import amex from "../../../assessts/amex.png";
import mastercard from "../../../assessts/mastercard.png";
import visa from "../../../assessts/visa.png";
import checkCardType from "../../../utils/checkCardType";

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
    cardHolderName: Yup.string()
      .required("Card holder name required")
      .min(3, "Please enter valid name"),
    cardNumber: Yup.string()
      .required("Card number required")
      .matches(/^\d+$/, "Invalid Number")
      .min(13, "Invalid Number")
      .max(16, "Invalid Number"),
    expiryMonth: Yup.number().min(1, "Expiry month required"),
    expiryYear: Yup.number().min(startYear, "Expiry year required"),
    securityCode: Yup.string()
      .required("CVN required")
      .matches(/^\d+$/, "Invalid CVN")
      .min(3, "Invalid CVN")
      .max(3, "Invalid CVN"),
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
          const cardType = checkCardType(values.cardNumber);
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
          history.push("/payResult");
        }}
      >
        {({ values, errors, touched, handleSubmit, resetForm }) => {
          const cardType = checkCardType(values.cardNumber);
          return (
            <form onSubmit={handleSubmit}>
              <div className="w-100 mb-4" style={{ maxWidth: 300 }}>
                <img
                  className="payment-method-logo col-4 p-1"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    opacity:
                      cardType === "unknown" || cardType === "amex" ? 1 : 0.2,
                  }}
                  src={amex}
                  alt="amex card"
                />
                <img
                  className="payment-method-logo col-4 p-1"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    opacity:
                      cardType === "unknown" || cardType === "master" ? 1 : 0.2,
                  }}
                  src={mastercard}
                  alt="mastercard card"
                />
                <img
                  className="payment-method-logo col-4 p-1"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    opacity:
                      cardType === "unknown" || cardType === "visa" ? 1 : 0.2,
                  }}
                  src={visa}
                  alt="visa card"
                />
              </div>
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
          );
        }}
      </Formik>
    </div>
  );
}
