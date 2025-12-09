import { useState } from "react";

export default function Counter(){
    const[count,setcount]=useState(0);


    function increment(){
        setcount(count+1)
    }

    function decrement(e){
        if(count>0)
         setcount(count -1)
        else
            e.target.value="stop.."
    }

    function reset(){
        setcount(0)
    }


    return(
        <>
        {count}<br/>
        <input type="button" onClick={increment} value="increment" /><b/>
        <input type="button" onClick={(e)=>decrement(e)} value="decrement" /><b/>
        <input type="button" onClick={reset} value="reset" /><b/>
        </>
    )
}