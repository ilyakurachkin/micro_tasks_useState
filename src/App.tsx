import React, {useCallback, useState} from 'react';
import s from './App.module.css';

function App() {

    let  [a,setA]=useState(1)

    const onclickHandlerPlus = () => {
        setA(++a)
    }


    const onclickHandlerNull = () => {
        setA(0)
    }


    const onclickHandlerMinus= () => {
        setA(--a)
    }


    return (
        <>
            <div className={s.block}>
                <h1>{a}</h1>
                <button onClick={onclickHandlerPlus}>плюс</button>
                <button onClick={onclickHandlerNull}>null</button>
                <button onClick={onclickHandlerMinus}>минус</button>
            </div>
        </>
    )
}

export default App;
