import React,{useEffect, useState} from "react";

function MatchComponent({team}){
    const {teamId, content} = team;
    return(
        <div>
            <h1>{teamId}</h1>
            {content}
        </div>
    )
}

function Match ({teamId}){
    const [team, setTeam]=useState();

    useEffect(()=>{
        setTeam({teamId: '매칭 상대', content:`상태팀 매칭 정보: ${teamId}`})
    },[teamId]);
    return(
        <div>
            Match vs Team{teamId}
            {! team && 'Loading..'}
            {team && <MatchComponent team={team}/>}
        </div>
    )
}

function App3(){
    //함수형에서 state 값 정의하는 법
    const [value1, setValue1]=useState(0);
    const [value, setValue]=useState({value3:0, value:4 });
    const [teamId, setTeamId]=useState(10); //디폴트 값으로 지정해주는거임

    useEffect(()=>{
        console.log('Mount 시에 호출, 함수형에 array를 받는 형식')
    },[]);

    useEffect(()=>{
        console.log('value가 변경될 시에 호출', value)
    },[value]);

    const onClick = () => {
        setValue((prevState) =>{
            return(
                {...prevState, value1: 10}
            )
        })
    }
    return (
        <div>
        Hola
        <hr/>
        {value1} 
        함수형에서는 class 처럼 this.state 같이 안써도 바로 참조가 가능함
        <hr/>
        {value.value3} 
        오브젝트로 묶여이쓴는 밸류들의 값을 바꿀 때, 하나의 값만 바꾸면 안되고
        class형과 다르게 전체를 업데이트 해야함
        <button onClick={onClick}>
            Click
        </button>
        <br/>
        <button onClick={()=> setTeamId(teamId+1)}>다음 팀 보기</button>
        <hr/>
        <Match teamId={teamId}/>
        </div>
    )
}

export default App3