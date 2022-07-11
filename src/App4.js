import React, { useReducer, useState } from "react";

const SET_NAME='SET_NAME';
const SET_AGE='SET_AGE'; //상수값으로 지정해두어서 오타방지

const reducer = (prevState, action) =>{
    const {type, value} = action;
    if (type===SET_NAME){
        return {...prevState, myname:value}
    }
    else if (type===SET_AGE){
        return {...prevState, age: value};
    }

    return prevState;
};

const App4 = () =>{
    //1번 예시 
    // const [name, setName]=useState('');
    // const [age, setAge]=useState('');
    
    //2번 예시
    // const [person, setPerson] = useState({name:'', age:''});
    // const {name,age} =person;

    //3번 예시
    const [state,dispatch] = useReducer(reducer, {myname:'', age:''});
    const onChange =(e) => {
        const {name: type, value}= e.target; //name이라는 이름으로 받지만 type 값을 참조한다
        dispatch ({type, value}) 
    }

    return(
        <div>
            {/* 1번 */}
            {/* <input type="text" placeholder="name" onChange={e=> setName(e.target.value)}/> */}
            {/* 2번 */}
            {/* <input type="text" placeholder="name" 
            onChange={(e=> setPerson({name:e.target.value, age}))}/> */}
            {/* 3번 */}
            <input type="text" name="SET_NAME" placeholder="name" onChange= {onChange}/>

            {/* 1번 */}
            {/* <input type="text" placeholder="age" onChange={e=> setAge(e.target.value)}/> */}
            {/* 2번 */}
            {/* <input type="text" placeholder="age" 
            onChange={e=> setPerson({name, age: e.target.value})}/> */}
            {/* 3번 */}
            <input type="text" name="SET_AGE" placeholder="age" onChange={onChange}/>
            

            <br/>
        </div>
    )
}

export default App4