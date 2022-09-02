import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as labTestReducer } from "./LabTest/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  labTest: labTestReducer,
});

export const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
