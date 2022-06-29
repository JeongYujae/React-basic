// import logo from './logo.svg';
import './App.css';
import {Button} from 'antd'
import React from 'react';

class Counter1 extends React.Component {
  state={
    value:this.props.initialvalue,
  };
  // onClick =() =>{
  //   const value =this.state.value+1; //현 상태를 읽어와줄 수 있는 변수 정의가 필요함 + 직접적으로 값을 변경X
  //                                    //state로 부터 가져온 값을 새로운 변수로 할당 후에 값을 변경해야함
  //   this.setState({value}); //클릭되면 value값을 100으로 변경(setState -> 상태값을 설정하는 기능)
  // };
  onClick =() =>{
    this.setState((prevstate)=>{
      const {value} = prevstate;
      return {value: value+1};
    });
  };

  render(){
    const {value}=this.state; // 현재의 상태값을 참조
    return (  
    <div>
      Counter1:{value}
      <Button onClick={this.onClick}>+1</Button>
    </div>
    )
  }
}

class PostDetail extends React.Component{
  state={

  }
  componentDidMount(){
    const {postId}=this.props;
    this.requestPost(postId)
  };

  componentDidUpdate(prevProps){
    const {postId} =this.props;
    if (postId !== prevProps.postId) {
      this.requestPost(postId)
    }

  };

  requestPost(postId){
    console.log(`request post #${postId}`);
    this.setState({
      postDetail:null
    });

    setTimeout(()=>{
      this.setState({
        postDetail: `로딩된 post #${postId}`
      })
    },3000);
  }


  render() {
    const {postId}= this.props;
    const {postDetail}=this.state;
    return(
      <div>
        포스팅 #{postId}
        <hr/>
        {! postDetail && "Loading..."}
        {postDetail}
      </div>
    );
  }
}


// class TeamComponent extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>매칭가능한 팀</h1>
//         <ul>
//           {
//             this.props.team.map((team_name,index) => (
//               <li key={index}>{team_name}</li>
//             ))
//           }
//         </ul>
//       </div>
//     );
//     };
//   }
  
// function App() {
//   const team=["성보축구회","FC 신림","야반도주"];
//   return (
//     <div>
//       <Counter1 initialvalue={10}/>
//       <TeamComponent team={team}/>

//     </div>

//   );
// }

// export default App;


class App1 extends React.Component{
  state={
    postId:10
  }
  render(){
    return(
      <div>
      <PostDetail postId={this.state.postId}/>
      <button onClick={() => this.setState({postId:3})}>
        postID 변경하기
      </button>
      </div>
    )
  }
}

export default App1;