import { applyMiddleware, combineReducers, createStore } from "redux";
import paynowReducer, {
  PayNowState,
} from "./views/paynow/redux/reduce/paynowReducer";
import createSagaMiddleware from "redux-saga";
import { spawn } from "redux-saga/effects";
import itemSaga from "./views/paynow/redux/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

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

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
