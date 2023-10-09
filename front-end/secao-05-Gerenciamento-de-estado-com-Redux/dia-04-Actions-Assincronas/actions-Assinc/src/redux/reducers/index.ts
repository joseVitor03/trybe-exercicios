import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
    isFetching: false,
    imageUrl: '',
    errorMessage: '',
};

export type ActionDog = {
    type: string,
    payload: string,
};

const dogReducer = (state = INITIAL_STATE, action: ActionDog) => {
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                isFetching: true,
                imageUrl: '',
                errorMessage: '',
            }
            break;
        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                imageUrl: action.payload,
                errorMessage: '',
            }
            break;
        case REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                imageUrl: '',
                errorMessage: action.payload,
            };
        default:
            return state;
            break;
    }
}

export default dogReducer;