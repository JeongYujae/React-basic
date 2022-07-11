import React, { createContext, useContext } from "react";

// Cotnext API

const MessageContext = createContext();

const App = ()  => (
    <MessageContext.Provider value="Provider Values">
        <Level2Wrapper />
    </MessageContext.Provider>
);

const Level2Wrapper = () =>{
    const message= useContext(MessageContext); 
    // useContext로 복수의 값들 사용 가능
    return(
        <div>
        <Level2 message={message} />
        </div>  
    )
  
};

const Level2 = ({ message }) => <div>Level2: {message}</div>;
export default App;

