
import { useEffect } from 'react';
import './App.css'

function App() {
  const port=import.meta.env.VITE_PORT;

  async function fetchData() {
    try{
      let res=await fetch(`${port}/jobPosts`)
      let data=await res.json();
      console.log(data);

    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
