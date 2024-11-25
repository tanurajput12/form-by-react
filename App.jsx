import { useState } from "react";
const App=()=>{
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const handleSubmit=()=>{
    alert("name:"+name+"city:"+city);
  }
  return(
    <>
    <h1>application form</h1>
    Enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <br/>
    Enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
    <br/>
    <button onClick={(handleSubmit)}>click here</button>
    </>
  )
}
 export default App;
// import { useState } from "react";
// const App=()=>{
//   const [input,setInput]=useState({});  // input={}
//   // input={rollno:121,name:"sachin",city:"bhopal",fees:3400}

//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput(values=>){...values,[name]:value}));
//     console.log(input);
//   }
//   return(
//     <>
//     <h1>multiple input handle by ...(triple dot)</h1>
//     onChange={handleInput}/>
//     Enter name:<input type="text" name="name"
//     onChange={handleInput}/>
//     Enter city:<input type="text" name="city" 
//     onChange={handleInput}/>
//     Enter fees:<input type="text" name="name" 
//     onChange={handleInput}/>
    
//     </>
//   )
// }

