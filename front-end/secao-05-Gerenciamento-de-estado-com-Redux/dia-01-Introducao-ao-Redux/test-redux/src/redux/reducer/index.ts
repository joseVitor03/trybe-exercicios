import { AnyAction } from "redux";
import { INCREMENT, DECREMENT } from "../action";
const INITIAL_STATE = {
  count: 0
}
export const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
};