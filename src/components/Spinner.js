import React from "react"

const Spinner = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-[300px]">
         
      <div className="spinner"></div>
      
      <p>loading</p>
    </div>
  )
};

export default Spinner;
