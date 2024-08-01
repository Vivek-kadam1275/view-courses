import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FilterButtons from "./components/FilterButtons";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from './data';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import { useEffect } from "react";

const App = () => {

  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState({});

  const [category,setCategory]=useState(filterData[0].title);
  // Asynchronous function to fetch data from api
  const fetchData = async () => {

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setOutput(data);
    
       // console.log("fetched")
      // console.log(output);
      setLoading(false);
    } catch (e) {
      toast.error("Error while fetching api")
    }
    

  }

  // we are fetching data once at first render.
  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="flex flex-col    ">
      <Navbar />
      <div className="bg-[#4a4e69] min-h-[657px] ">
        <FilterButtons filterData={filterData} category={category} setCategory={setCategory} />


        {
          loading ? <Spinner className=""></Spinner> : <Cards data={output.data} category={category}/>
        }


      </div>
      <ToastContainer/>
    </div>)
};

export default App;
