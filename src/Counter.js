import React from "react"

class Counter extends React.Component{
    static defaultProps={
        color:'black'
        //디폴트로 색을 정해놓고, 
    }
    state={
        color:this.props.color, // 배경색 값을 지정된 값으로 받아서
        value:0,
    }
    onClick = () =>{
        this.setState(prevState=> ({
            value: prevState.value+1
        }))
    }

    onContextMenu= (e) =>{
        e.preventDefault();
        // 우클릭하면 디폴트 그 우클릭 반응 없애기
        this.setState(({value:prevValue}) => ({
            value: (prevValue>=1 ? prevValue -1 : 0)
        }))
    }
    render(){
        const {color, value} = this.state; // 여기서 뽑아주고
        return(
            <div onClick={this.onClick}
                onContextMenu={this.onContextMenu}
                style={ {...style_1, backgroundColor:color}}> 
                {/* 스프래드해서 받아주기 */}
                {value}
            </div>
        );
    }
}
const style_1={
    width:'100px',
    height:'100px',
    display:'inline-block',
    borderRadius: '50px',
    color: 'white',
    lineHeight:'100px',
    userSelect: 'none',
    fontSize:'3rem',
    textAlign:'center',

}
export default Counter;