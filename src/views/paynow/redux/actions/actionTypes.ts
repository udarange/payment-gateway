/* eslint-disable no-unused-vars */
export interface PaymentFormData {
  cardNumber: number;
  securityCode: number;
  cardHolderName: string;
  expiryMonth: number;
  expiryYear: number;
}

export interface PaymentRequest extends PaymentFormData {
  cardType: string;
  amount: number;
  currency: string;
  merchantId: string;
}

export enum paynowActionTypes {
  TRIGGER_PAYMENT = 'payment-gateway/paynow/trigger-payment',
  PAYMENT_SUCCESS = 'payment-gateway/paynow/payment-success',
  PAYMENT_FAILURE = 'payment-gateway/paynow/payment-failure',
  RESET_PAYMENT = 'payment-gateway/paynow/reset-payment',
}

export interface TriggerPaymentAction {
  type: paynowActionTypes.TRIGGER_PAYMENT;
  payment: PaymentRequest;
}

export interface PaymentSuccessAction {
  type: paynowActionTypes.PAYMENT_SUCCESS;
  transactionId: string;
}

export interface PaymentFailureAction {
  type: paynowActionTypes.PAYMENT_FAILURE;
  error: string;
}

export interface ResetPaymentAction {
  type: paynowActionTypes.RESET_PAYMENT;
}

export type PaynowActionTypes = TriggerPaymentAction | PaymentSuccessAction | PaymentFailureAction | ResetPaymentAction;
