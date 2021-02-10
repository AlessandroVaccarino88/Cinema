import React from "react";
import {select, deselect} from "./action";
import useContext from 'react'
import StateContext from './App'

const seats = [
    { seatID: "A1", x: 30, y:50, size: 20 },
    { seatID: "A2", x: 60, y:50, size: 20 },
    { seatID: "A3", x: 90, y:50, size: 20 },
    { seatID: "A4", x: 120, y:50, size: 20 },
    { seatID: "B1", x: 40, y:80, size: 20 },
    { seatID: "B2", x: 70, y:80, size: 20 },
    { seatID: "B3", x: 100, y:80, size: 20 },
    { seatID: "B4", x: 130, y:80, size: 20 }
]

function Map({posti}){
    const [state, dispatch] = useContext(StateContext)
    return (   posti.map(s => {
        const cart = state.cart.filter(i => i.seatID===s.seatID)
        const occupied = state.occupied.filter(i => i.seatID===s.seatID)
        const price = state.fares.filter(i => i.tariffa==="Intero")[0].price


        if(cart.length===0 && occupied.length===0) {
            return(<Seat seatID={s.seatID} size={s.size} x={s.x} y={s.y}
                         occupied={false} selected={false} onClick={() => dispatch(select(s.seatID, price))} />)
        }else if(cart.length===1) {
            return(<Seat seatID={s.seatID} size={s.size} x={s.x} y={s.y}
                         occupied={false} selected={true} onClick={() => dispatch(deselect(s.seatID))} />)
        }else {
            return(<Seat seatID={s.seatID} size={s.size} x={s.x} y={s.y}
                         occupied={true} selected={false} onClick={() => {}} />)
        }
    }))
}
function InteractiveMap(){
    return (<svg style={{ width: '50%', heigth: '100%', flex : 1}} viewBox='0 0 170 200'>
        <Map posti={seats}/>
    </svg>)
}

function Seat({seatID,x,y, size, occupied,selected,onClick}){
    let back;
    let text;
    let yy=y+10;
    if(occupied){
        back="red";
        text="white"
    }
    if(selected){
        back="orange"
        text="black"
    }
    return(<g key={seatID} fill={back} stroke="lightgrey" strokeWidth="0.7"  onClick={onClick}>
        <ellipse cx={x + size/2} cy={yy} rx={size/2} ry={size/4} fill={"orange"} />
        <rect key={seatID} width={size} height={size} x={x} y={yy} fill={"orange"} />
        <text stroke="none" fill={text} fontSize="8" textAnchor="middle" x={x + size/2} y={yy + 2*size/3}>{seatID}</text>
    </g>)
}
export default InteractiveMap;