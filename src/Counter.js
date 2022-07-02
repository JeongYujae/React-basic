import React from "react"

class Counter extends React.Component{
    state={

    }
    render(){
        return(
            <div onClick={this.props.onClick}>
                Counter
            </div>
        )
    }
}

export default Counter;