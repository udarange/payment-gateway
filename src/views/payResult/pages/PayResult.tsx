import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { AppState } from '../../../store';
import { PayNowState } from '../../paynow/redux/reduce/paynowReducer';
import { resetPaymentAction } from '../../paynow/redux/actions/paynowActions';

export default function PayResult(): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    paymentLoading,
    paymentError: { hasError: paymentHasError },
    transactionId,
  } = useSelector<AppState, PayNowState>((state) => state.payNowState);

  const goBack = () => {
    history.push('/');
    dispatch(resetPaymentAction());
  };

  if (!paymentLoading && !paymentHasError && transactionId === undefined) {
    // TODO:
    goBack();
  }

  if (paymentLoading) {
    return (
      <div className="d-flex flex-column align-items-center" style={{ marginTop: '20%' }}>
        <PuffLoader size={50} color="#07456b" loading />
        <p className="my-2" style={{ color: '#adb5bd' }}>
          Payment Processing...
        </p>
      </div>
    );
  }
  if (!paymentHasError && transactionId) {
    return (
      <div className="d-flex flex-column align-items-center" style={{ marginTop: '20%' }}>
        <p className="mb-2" style={{ color: '#adb5bd', lineHeight: '40px' }}>
          Payment Successful!
        </p>
        <button className="btn btn-outline-info w-100" style={{ maxWidth: 200 }} onClick={() => goBack()} type="button">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center" style={{ marginTop: '20%' }}>
      <p className="mb-2" style={{ color: '#adb5bd', lineHeight: '40px' }}>
        Payment Failure!
      </p>
      <button className="btn btn-outline-info w-100" style={{ maxWidth: 200 }} onClick={() => goBack()} type="button">
        Go Back
      </button>
    </div>
  );
}
