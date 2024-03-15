

import { useState } from "react";

import { useEffect } from "react";
import thing from "./thing";


const Things = () => {
    const [things , setThings] = useState([])

useEffect(()=>{
    fetch('market.json')
    .then(res => res.json())
    .then(data => setThings(data))
},[])




    return (
        <div>
            <h1>Things : {things.length}</h1>

{things.map(thing => <Thing> key ={thing.id}  thing = {Thing} </Thing>)
}
            
        </div>


        
    );
};

export default Things;