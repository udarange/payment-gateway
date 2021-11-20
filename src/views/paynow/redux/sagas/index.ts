import { takeLatest } from "redux-saga/effects";
import { paynowActionTypes } from "../actions/actionTypes";
import callPayNow from "./callPayNow";

export default function* itemSaga() {
  yield takeLatest(paynowActionTypes.TRIGGER_PAYMENT, callPayNow);
}
