import { useState, useMemo } from "react"

const heavyCalculate = (number) => {
    console.log("heavySum 변수 초기화 함수 실행");
    for (let i = 0; i < 9999999; i++) {
        if(i == 9999998){
            console.log("실행되었다.")
        }
     }

    return number + 100000;
}

const lightCalculate = (number) => {
    console.log("lightSum 변수 초기화 함수 실행");
    return number + 10000;
}

const UseMemo = () => {
    const [heavyNumber, setHeavyNumber] = useState(1);
    const [lightNumber, setLightNumber] = useState(1);

    const heavySum = useMemo(() =>{
        return heavyCalculate(heavyNumber);
    }, [heavyNumber]
    );

    const lightSum = lightCalculate(lightNumber);

    const onChangeHeavyNumber = (e) => {
        console.log("heavyNumber useState 함수 실행");
        setHeavyNumber(e.target.value);
    }

    const onChangeLightNumber = (e) => {
        console.log("lightNumber useState 함수 실행");
        setLightNumber(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={heavyNumber} onChange={onChangeHeavyNumber} />
            </div>
            <div>
                <span>number = {heavyNumber}</span>
                <br></br>
                <span>sum = {heavySum} </span>
            </div>
            <div>
                <input value={lightNumber} onChange={onChangeLightNumber} />
            </div>
            <div>
                <span>number = {lightNumber}</span>
                <br></br>
                <span>sum = {lightSum} </span>
            </div>
        </div>
    );

}

export default UseMemo;