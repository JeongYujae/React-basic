import React from "react";
import {Input, List} from "antd";
import produce from "immer"
function TodoItem ({todo}) {
    return(<li>{todo}</li>)
}
class TodoList extends React.Component{
    state={
        todoList:['GYM', 'REACT','Clean Room'],
        current:'',
    }

    onChange = (e) =>{
        const {value}=e.target;
        this.setState({
            current:value,
        })
    }

    onkeyDown = (e) =>{
        if (e.keyCode===13) {
            // this.setState(
            // produce(this.state, draft =>{
            //     if (draft.current.trim().length >0) {
            //         draft.current='';
            //         draft.todoList.push(current);
            //     }
            // })
            // );
            const {todoList, current}=this.state;
            if (current.trim().length>0){
                this.setState({
                current:'',
                todoList:[...todoList, current.trim()],
            })
        }
            
        }
    }
    render(){
        return (
            <div style={{width: '400px', margin:'30px auto', textAlign:'center'}}>
                <List 
                header={"Todo List"}
                dataSource={this.state.todoList}
                bordered={true}
                renderItem={todo =>(
                    <List.Item>
                        {todo}
                    </List.Item>
                )}
                style={{
                    marginBottom:'5px'
                }}
                />

                <Input 
                type="text"
                value={this.state.current}
                placeholder={"Do something!"}
                onChange={this.onChange}
                onKeyDown={this.onkeyDown}
                />
                {/* <ul>
                {this.state.todoList.map((todo,index)=>
                    <TodoItem key={index} todo={todo} />
                )}
                </ul>
                <input value={this.state.current} onChange={this.onChange} onKeyDown={this.onkeyDown} placeholder="Do Something!"/>
                <button>Submit</button> */}
            </div>
        ); 
    }
}

export default TodoList;