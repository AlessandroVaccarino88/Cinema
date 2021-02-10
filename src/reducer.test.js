import {cancel, change, deselect, select, sell} from "./action";
import {reducer} from"./reducer";

test( 'verifica deselezione', () => {
    const oldState = {c : [{seatID : "A1", price : 8.0},{seatID: "A2", price : 8.0}], i : 0.0, s : [] }
    const newState = reducer(oldState, deselect("A1"))
    const newState1 = reducer(oldState, deselect("A2"))

    expect(newState.c).toEqual([{seatID: "A2", price : 8.0}])
    expect(newState.i).toEqual(oldState.i)
    expect(newState.s).toEqual(oldState.s)
    expect(newState1.c).toEqual([{seatID: "A1", price : 8.0}])
    expect(newState1.i).toEqual(oldState.i)
    expect(newState1.s).toEqual(oldState.s)
})

test( 'verifica selezione', () => {
    const oldState = {c : [{seatID:"A1", price : 8.0}], i : 0.0, s : []}
    const newState = reducer(oldState, select("A2"))

    expect(newState.c).toEqual([{seatID:"A1", price : 8.0}, {seatID:"A2", price : 8.0}])
    expect(newState.i).toEqual(oldState.i)
    expect(newState.s).toEqual(oldState.s)
})

test( 'verifica conferma', () => {
    const oldState = {c : [{seatID : "A1", price : 8.0},{seatID: "A2", price : 8.0}], i : 8.0, s : [{seatID : "A3", price : 8.0}]}
    const newState = reducer(oldState, sell())

    expect(newState.c).toEqual([])
    expect(newState.i).toEqual(24.0)
    expect(newState.s).toEqual([{seatID : "A3", price : 8.0},{seatID : "A1", price : 8.0},{seatID: "A2", price : 8.0}])
})

test( 'verifica annulla', () => {
    const oldState = {c : [{seatID : "A1", price : 8.0}], i : 0.0, s : []}
    const newState = reducer(oldState, cancel())

    expect(newState.c).toEqual([])
    expect(newState.i).toEqual(oldState.i)
    expect(newState.s).toEqual(oldState.s)
})

test( 'verifica cambio', () => {
    const oldState = {c : [{seatID : "A1", price : 8.0}], i : 0.0, s : []}
    const newState = reducer(oldState, change("A1", 5.2))

    expect(newState.c).toEqual([{seatID : "A1", price : 5.2}])
    expect(newState.i).toEqual(oldState.i)
    expect(newState.s).toEqual(oldState.s)
})