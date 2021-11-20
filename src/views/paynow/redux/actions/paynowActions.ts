import {
  PaymentRequest,
  PaymentFailureAction,
  PaymentSuccessAction,
  paynowActionTypes,
  ResetPaymentAction,
  TriggerPaymentAction,
} from "./actionTypes";

export function triggerPaymentAction(
  payment: PaymentRequest
): TriggerPaymentAction {
  return {
    type: paynowActionTypes.TRIGGER_PAYMENT,
    payment,
  };
}

export function paymentSuccessAction(
  transactionId: string
): PaymentSuccessAction {
  return {
    type: paynowActionTypes.PAYMENT_SUCCESS,
    transactionId,
  };
}

export function paymentFailureAction(error: string): PaymentFailureAction {
  console.error("fetchSkillsFailureAction", error);
  return {
    type: paynowActionTypes.PAYMENT_FAILURE,
    error,
  };
}

export function resetPaymentAction(): ResetPaymentAction {
  return {
    type: paynowActionTypes.RESET_PAYMENT,
  };
}
