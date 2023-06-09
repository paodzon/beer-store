import * as actionTypes from "../actionTypes";
import INITIAL_STATE from "./initialState";

export default function AuthReducer(
  state = INITIAL_STATE.auth,
  action: Action
) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        loggingInUserError: null,
      };
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        user:null,
      }
    case actionTypes.IS_LOGGING_IN_USER_ERROR:
      return {
        ...state,
        user: null,
        loggingInUserError: action.payload
      };
    case actionTypes.IS_SIGNING_UP_USER_ERROR:
      return {
        ...state,
        signingUpUserError:action.payload  
      }
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
