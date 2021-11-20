import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import itemSaga from './views/paynow/redux/sagas';
import paynowReducer, { PayNowState } from './views/paynow/redux/reduce/paynowReducer';

export interface AppState {
  payNowState: PayNowState;
}

const rootReducer = combineReducers<AppState>({
  payNowState: paynowReducer,
});

function* rootSaga() {
  yield spawn(itemSaga);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
