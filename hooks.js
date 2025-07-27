const { useEffect, useContext, useState } = require("react");

//useState   for local state 
const [user,setUser]=useState(null);

//useEffect- for side effects like API calls 
useEffect(()=>{
    fetchUserData().then(data=>setUser(data));
},[])


//useContext- to consume  context values
const theme=useContext(ThemeContext);


//custom hook
function useWindowWidth(){
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        const handleResize =()=>setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
    
    },[]);
    return width
}