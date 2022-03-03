import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import studentReducer from "./student/reducers/student.reducer";

const store = createStore(studentReducer, applyMiddleware(thunk));

export default store;
