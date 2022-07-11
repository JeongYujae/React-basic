import React from "react";
import Axios from "axios"
class EpisodeList extends React.Component{
    state={
        episodeList:[],
    }

    componentDidMount(){

    };

    render(){
        const {episodeList}=this.state;
        return(
            <div>
                <h1>케이티 위즈 화이티이 화이팅</h1>
                {JSON.stringify(episodeList)}
            </div>
        )
    }
}

export default EpisodeList