import React, {createContext, useState, useReducer, useContext} from "react";

//action의 종류

const CounterContext = createContext(0);

const INCREMENT= "COUNTER/INCREMENT"
const DECREMENT= "COUNTER/DECREMENT"

const reducer= (prevstate, action) =>{
    const {type} =action;
    if (type===INCREMENT){
        return prevstate+1;
    }
    else if (type==DECREMENT){
        return prevstate-1
    }
    return prevstate;
}

const App7 = () =>{
    const [state, dispatch]= useReducer(reducer, 0); // 초기값 0으로 설정한 reducer
    // const [value, setValue] = useState(0);
    return (
        <div>
            <h1 onClick={()=> dispatch({type:INCREMENT})}>Score:{state}</h1>
            <CounterContext.Provider value={{state, dispatch}}>
                <Gamebox/>
            </CounterContext.Provider>
        </div>
    )
};

const Gamebox=() =>{
    const {state: score, dispatch}= useContext(CounterContext);

    const onClick = () =>{dispatch({type:DECREMENT})}
    return(
        <div>
            <h2>Game Box</h2>
            <button onClick={onClick}>{score}</button>
        </div>
    )
}

export default App7