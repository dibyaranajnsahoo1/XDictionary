import React,{useState} from "react";

const Xdictionary = ()=>{
    const data = 
    [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ];
    
    const [search, setSearch] = useState("")
    const [result, setResult] = useState("")

    

    const handelSearch = ()=>{
        let ans = null;
        data.map((i)=>{
            if(i.word.toLowerCase()===search.toLowerCase()){
                ans = i.meaning;
            }
            return null;
        })
      if(ans){
        setResult(ans);
      }else{
        setResult('Word not found in the dictionary.')
      }
        
    }


    return(
        <div>
        <h1>Dictionary App</h1>
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={handelSearch}>Search</button>
        </div>
        <div>
            <h3>Definition:</h3>
            {result}
        </div>
        </div>

    )
}
export default Xdictionary;