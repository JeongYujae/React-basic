import React, {useEffect, useState} from "react";

const useCurrentTime= () => {
    const [currentTime, setCurrentTime]=useState(''); //디폴트로 빈 문자열

    useEffect(()=>{
        const handler = setInterval(()=>{
            const currentTime= (new Date()).toISOString().slice(11,19)
            setCurrentTime(currentTime);
        },1000)
    
    return () => clearInterval(handler);

    },[]);

    return currentTime;

}

const useWindowWidth = () => {
    const [width, setwidth]= useState(window.innerWidth);
    
    useEffect(()=>{
        const onResize = () =>{
            setwidth(window.innerWidth);
        }
       
        window.addEventListener('resize',onResize);
        return () => {
            window.removeEventListener('resize',onResize)
        }

    },  []);

    return width;
}


const Clock = () => {
    const currentTime= useCurrentTime(); // 인자 필요 없으니 비워 두기
    const windowWidth=useWindowWidth();
    return (
        <div>
            <h1>
                현재시각:
            </h1>
            {currentTime}

            <h1>
                Current Window Width:
            </h1>
            {windowWidth}px
        </div>
    )
}

export default Clock