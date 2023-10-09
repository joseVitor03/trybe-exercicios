import { Dispatch } from "redux";
import { CharacterResult } from "../../type";

export const CHARACTER_START = 'CHARACTER_START';
export const CHARACTER_SUCCESS = 'CHARACTER_SUCCESS';
export const CHARACTER_ERROR = 'CHARACTER_ERROR';

export const characterStart = () => ({ type: CHARACTER_START });

export const characterSuccess = (character: CharacterResult) => ({
    type: CHARACTER_SUCCESS,
    payload: character,
});

export const characterError = () => ({ type: CHARACTER_ERROR });

export const searchCharacter = (character: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(characterStart());
        try {
            const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${character}`);
            const data = await response.json();
            console.log(data[0]);
            
            dispatch(characterSuccess(data[0]));
        } catch (error) {
            dispatch(characterError());
        }
    }
};