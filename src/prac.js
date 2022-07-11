import React,{setState} from "react";

function Position ({name,position,age}){
    // const [userName, setUserName] =setState()
    // const [position, setPosition]=userId.position
    // const [age, setAge]= userId.age
    return(
      <div>
        <ul>
            <li>
                Name: {name}
                <br/>
                Position: {position}
                <br/>
                Age: {age}
            </li>
        </ul>
      </div>  
    );
}




function App1 (){
    return(
        <Position name={'Jeong'} position={'CM'} age={22}/>
    )
}
export default App1;