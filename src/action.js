export const SELECT = "select";
export const DESELECT = "unselect";
export const SELL = "sell";
export const CANCEL = "cancel";
export const CHANGE = "change";

export function select(seatID){
    return {type:SELECT, seatID}
}
export function deselect (seatID){
    return {type: DESELECT, seatID}
}
export function sell (){
    return {type : SELL}
}
export function change (seatID, sconto){
    return {type : CHANGE, seatID, sconto}
}
export function cancel(){
    return {type : CANCEL}
}