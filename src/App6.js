import React, {createContext, useContext, useState} from "react";

const CounterContext= createContext();

//여러개의 자식 부모 전역적으로 관리할 상태값들을 Context 값으로 만들어서 필요할 떄 가져다가 넘겨서 쓸 수 있게
//만들 수 있음

const App6 =() =>{
    const [value, setValue]= useState(0);
    const onIncrement=() =>{
        setValue((prevValue) => prevValue+1);
    };


    return (
    <div>
        승수:{value}
        <button onClick= {onIncrement}>+1</button>
        <CounterContext.Provider value={{value, onIncrement}}>
            <Lev></Lev>
        </CounterContext.Provider>
    </div>
    )
}

const Lev = () =>{
    const {value, onIncrement} =useContext(CounterContext);
    return(
        <div>KT WIZ: {value}
        <button onClick= {onIncrement}>+1</button>
        </div>
    )
    // <div onClick={}>
    //     Lev:{value}

    // </div>
}

export default App6;