import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setloading] = useState(true);

  async function fetchData(){
    setloading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      //output--->
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network Issue..");
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
  <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <Filter filterData={filterData}></Filter>
    </div>
    <div>
      {
        loading ? (<Spinner/>) : (<Cards courses={courses}/>)
      }
    </div>
  </div>
  )
};

export default App;
