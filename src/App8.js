import React from "react";
import { BrowserRouter,Link, Route, NavLink } from "react-router-dom";
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
            {/* exact={true} -> /about 이나 /about/team 하면 같이 렌더링이 됨 이를 방지해주는 코드*/}
            <Route exact={true} path="/team/" component={Team}/>
            <Route path="/match/" component={Match}/>
            <Route path="/player/" component={Player}/>


        </div>
    </BrowserRouter>

    )
}

const special_style={
    backgroundColor: 'green'}



//해당 주소에 접속할떄만 보여지게 하고 싶을때 routing 사용

//3가지 인자를 받을 수 있음(history, location, match)
const Team = ({history, location, match}) =>{
    return(
        <div>
            <h2>
                TEAM
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

const Player = () =>{
    return(
        <div>
            <h2>
                PLAYER
            </h2>
        </div>
    )
}

export default App8