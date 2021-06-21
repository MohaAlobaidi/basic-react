import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

  let getTours = async ()=>{
      try{
          setLoading(true)
          let response = await fetch(url)
          let tours = await response.json()
          setLoading(false)
          setTours(tours)
          console.log(tours);
      }catch(error){
        setLoading(true)
        console.log(error);
      }
  }

  useEffect(()=>{
    getTours()
  },[])

  let deleteItem =(id)=>{
   let newTours = tours.filter((tour)=> tour.id !== id)
   setTours(newTours)
  }


  if(loading){
    return(<>
    <main>
      <Loading/>
    </main>
    </>)
  }else if(tours.length === 0){
    return(
         <div className="title"> 
            <h2>no tours left</h2>
            <button className='btn' onClick={()=>getTours()}>refresh</button>
         </div>
         )
  }
  else{

    return <main>
      <Tours tours={tours} deleteItem={deleteItem}/>
    </main>
  }
}

export default App
