import { ThunkDispatch } from "redux-thunk"

export type CharacterResult = {
  name: string,
  titles: string[],
  gender: string,
  isLoading: false,
  born: string,
  messageError: string
}

export type CharacterAction = {
  type: string,
  payload: CharacterResult,
}

export type ResultFinal = {
  characterReducer: CharacterResult
}

export type Dispatch = ThunkDispatch<CharacterResult, null, CharacterAction>;
