import { paynowActionTypes, PaynowActionTypes } from "../actions/actionTypes";

export interface PayNowState {
  paymentLoading: boolean;
  transactionId: string | undefined;
  paymentError: { hasError: boolean; description: string };
}

const initialState: PayNowState = {
  paymentLoading: false,
  transactionId: undefined,
  paymentError: { hasError: false, description: "" },
};

export default function paynowReducer(
  state: PayNowState = initialState,
  action: PaynowActionTypes
) {
  switch (action.type) {
    case paynowActionTypes.TRIGGER_PAYMENT:
      return {
        ...state,
        paymentLoading: true,
        transactionId: undefined,
        itemListHasError: { hasError: false, description: "" },
      };
    case paynowActionTypes.PAYMENT_SUCCESS:
      return {
        ...state,
        paymentLoading: false,
        transactionId: action.transactionId,
        itemListHasError: { hasError: false, description: "" },
      };
    case paynowActionTypes.PAYMENT_FAILURE:
      return {
        ...state,
        paymentLoading: false,
        transactionId: undefined,
        itemListHasError: { hasError: true, description: action.error },
      };
    case paynowActionTypes.RESET_PAYMENT:
      return {
        ...state,
        paymentLoading: false,
        transactionId: undefined,
        itemListHasError: { hasError: false, description: "" },
      };
    default:
      return state;
  }
}
