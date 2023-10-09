import { DECREMENT, INCREMENT } from "../action";
const INITIAL_STATE = {
    count: 0,
}
type ActionType = {
    type: string
    payload: number
};

export const reducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + action.payload,
            }
        case DECREMENT:
            return {
                count: state.count - 1,
            }
        default:
        return state;
    }
};