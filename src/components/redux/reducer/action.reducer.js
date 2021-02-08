import { SUBMIT_ALBUM } from "../actionCreator/action.types";

const initialState=[];


const actionReducer=(state=initialState,action)=>{

    switch(action.type){
        case SUBMIT_ALBUM:return{...state,albums:action.payload}


        default: return state;
    } 
}

export default actionReducer;