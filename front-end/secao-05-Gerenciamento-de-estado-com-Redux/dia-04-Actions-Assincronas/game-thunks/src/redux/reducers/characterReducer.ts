import { CharacterAction } from "../../type";
import { CHARACTER_START, CHARACTER_SUCCESS, CHARACTER_ERROR } from "../actions";
const INITIAL_STATE = {
  name: '',
  titles: [],
  gender: '',
  isLoading: false,
  born: '',
  messageError: '',
};

const characterReducer = (state = INITIAL_STATE, action: CharacterAction) => {
  switch (action.type) {
    case CHARACTER_START:
      return {
        ...state,
        isLoading: true,
      }
      break;
    case CHARACTER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.gender,
        isLoading: false,
        born: action.payload.born,
        titles: [action.payload.titles],
      }
      break;
    case CHARACTER_ERROR:
      return {
        ...state,
        messageError: 'Ocorreu um Erro. Tente novamente',
      }
    default:
      return state;
      break;
  }
};

export default characterReducer;
