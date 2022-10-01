import React, {useCallback, useState} from 'react';
import  s from './App.module.css';

function App() {


    let[a,setA]=useState(1)


    const onClickHandlerPlus =()=> {
        setA(++a);
        console.log(a)
    }
    const onClickHandlerMinus =()=> {
        setA(--a);
    }
    const onClickHandlerNull =()=> {
        setA(0);
    }

    return (
        <>
            <div>
                <h1 className={s.title}>{a}</h1>
                <button onClick={onClickHandlerPlus}>плюс</button>
                <button onClick={onClickHandlerNull}>0</button>
                <button onClick={onClickHandlerMinus}>минус</button>
            </div>
        </>
    )
}

export default App;
