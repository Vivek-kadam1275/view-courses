import React from "react"

const FilterButtons = ({filterData,category,setCategory}) => {
  console.log(category);
   
  
  return (
    <div className="flex flex-wrap justify-center gap-4 py-5">
      {
        filterData.map((item)=>{
          return(
            <button key={item.id} className={`bg-[#22223b] text-white   font-semibold text-xl py-1 px-2 rounded-md opacity-70 hover:opacity-100 transition-all duration-200 border ${category===item.title ? ' border-white border-2 opacity-100' :' border border-transparent'} `} onClick={()=>{
               setCategory(item.title)
            }}>{item.title} </button>
          )
        })
      }
      
    </div>
  )
};

export default FilterButtons;
