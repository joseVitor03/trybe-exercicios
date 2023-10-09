export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const actionCreator = (increament = 1) => ({ 
    type: INCREMENT,
    payload: increament
})

export const actionDecrement = () => ({ type: DECREMENT })