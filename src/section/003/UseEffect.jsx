import React, { useEffect, useState } from "react";


const Counter2 = () =>{

    const [number, setNumber] = useState(0);

    useEffect(()=>{console.log("컴포턴트가 업데이트일때마다 실행됨")});
    useEffect(() => {console.log("마운트, 언마운트 때 마다 실행됨")},[]);
    useEffect(() => {console.log("배열 변수에 변경이 있을때 마다 실행됨")},[number])

    return (
        <div>
            <p>
                카운터 값 <b>{number}</b>
            </p>
            <button onClick={() => setNumber(prev => prev + 1)}>+1</button>
            <button onClick={() => setNumber(number - 1)}>-1</button>
        </div>
    );
}

export default Counter2;