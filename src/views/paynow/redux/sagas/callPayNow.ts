import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { paymentFailureAction, paymentSuccessAction } from '../actions/paynowActions';
import { PaymentRequest, TriggerPaymentAction } from '../actions/actionTypes';

function doPayment(payment: PaymentRequest) {
  const data = { ...payment };

  return axios
    .post(process.env.REACT_APP_PAYMENT_GATEWAY_API ?? '', data, {})
    .then((response) => response.data)
    .catch((error) => error);
}

export default function* callPayNow(action: TriggerPaymentAction) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const response: string = yield call(doPayment, action.payment);
    // TODO: extract transaction id and put
    yield put(paymentSuccessAction('23984092nuin8'));
  } catch (err) {
    // @ts-ignore
    yield put(paymentFailureAction(err.toString()));
  }
}
