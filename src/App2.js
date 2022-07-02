import React from "react";
import ErrorBoundary from "ErrorBoundary";


class Message extends React.Component{
    render(){
        throw new Error("Purposed ERROR");
        return "MESSAGE COMPONENT"
    }
}


class App3 extends React.Component{
    render(){
        return(
        <ErrorBoundary>
            <Message/>
        </ErrorBoundary>
        )
    }
}

export default App3