import { useRef } from "react";

function Login(){
    
    const uname=useRef();
    const pass=useRef();

    function takeCredentials(events){
        events.preventDefault();
        console.log('UserName is',uname.current.value)
        
    }
}