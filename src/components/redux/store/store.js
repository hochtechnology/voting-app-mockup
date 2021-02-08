import { createStore,applyMiddleware } from "redux";
import actionReducer from "../reducer/action.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const store=()=>{
    
    return createStore(actionReducer,composeWithDevTools(applyMiddleware(thunk)))
}
export default store;