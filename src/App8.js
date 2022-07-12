import React, { useEffect, useState } from "react";
import { BrowserRouter,Link, Route, NavLink, Switch } from "react-router-dom";
import queryString from "query-string"

const App8 = () =>{
    return(
    <BrowserRouter>
        <div>
            <h1>Title</h1>
              
            <ul>
            {/* 리로딩이 안되고 주소가 바뀌게 해줌 */}

            <li> <Link to="/team/">Team</Link> </li>
            <li> <NavLink to="/match/" activeStyle={special_style}>Match</NavLink> </li>
            <li> <Link to="/player/">Player</Link> </li>

    
            </ul>
            <Switch>
            {/* exact={true} -> /about 이나 /about/team 하면 같이 렌더링이 됨 이를 방지해주는 코드*/}
            <Route exact={true} path="/team/" component={Team}/>
            <Route path="/match/" component={Match}/>
            <Route path="/player/:player_id" component={PlayerDetail}/>
            <Route path="/player/" component={Player}/>
            <Route component={RouteNoMatch}/>
            {/* RouteNoMatch라는 함수를 만들어서 위에서 걸리지 않은, 즉 잘못된 경로일 때를 처리 */}
            </Switch >


        </div>
    </BrowserRouter>

    )
}

const special_style={
    backgroundColor: 'green'}


const RouteNoMatch = ({location}) =>{
    return <>Wrong Route :( ({location.pathname})</>;
}
// 잘못된 주소까지 써주는 location.pathname

//해당 주소에 접속할떄만 보여지게 하고 싶을때 routing 사용

//3가지 인자를 받을 수 있음(history, location, match)
const Team = ({history, location, match}) =>{
    const {token}= queryString.parse(location.search) // querystring에서 parse 받은 token

    return(
        <div>
            <h2>
                TEAM
                token:{token}
            </h2>
        </div>
    )
}

const Match = () =>{
    return(
        <div>
            <h2>
                MATCH
            </h2>
        </div>
    )
}

const Player = ({history, location, match}) =>{
    return(
        <div>
            <h2>
                PLAYER
            </h2>
            <ul>
                <li>
                    <Link to={`${match.url}1/`}> Player No.1</Link>
                </li>
                <li>
                <Link to={`${match.url}2/`}> Player No.2</Link>

                </li>
                
            </ul>
        </div>
    )
}

// match.params 로 참조가능
const PlayerDetail = ({match}) => {
    const {params: {player_id}} = match;

    const [post, setPost] =useState();

    useEffect(()=>{
        console.log(`get post detail api 호출: ${player_id}`)
        setPost({title: `${player_id}`, content: `PLAYER ${player_id}`})

    },[player_id]);


    return(
        <div>
            <h2>
                Player #{player_id}
            </h2>
        </div>
    )
}

export default App8