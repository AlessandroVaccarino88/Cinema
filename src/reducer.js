import {CANCEL, CHANGE, select, SELECT, SELL, deselect, DESELECT} from "./action";

export const initialState = {c : [] , i : 0.0, s : [ { seatID : [] , price : 0.0 } ] }
export function reducer(state, action){
    const oldV = state.s
    const oldC = state.c
    const oldI = state.i
    switch (action.type) {
        case SELECT:
            return {...state, c : [...oldC, {seatID: action.seatID, price : 8.0}]}
        case DESELECT:
            return {...state, c : oldC.filter(e => e.seatID !== action.seatID)}
        case CHANGE:
            return {...state, c : oldC.filter(e => {
                    if (e.seatID === action.seatID) {
                        e.price = action.sconto
                        return e
                    } else return e;
                })
            }
        case CANCEL:
            return {...state, c : initialState.c}
        case SELL:
            return {
                ...state,
                c : initialState.c,
                i : oldI + oldC.reduce((a,b)=> a.price+b.price),
                s : [...oldV, ...oldC]
            }
            default:
                return state;
    }
}