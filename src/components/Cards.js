import React, { useState } from "react"
import Card from "./Card";

// import { toast } from "react-toastify";
const Cards = ({ data, category }) => {

  const [List, setList] = useState([]);

  const [likedList, setLikedList] = useState([]);
  // console.log(data);
  function getCourseList(){

    if (category === 'All') {
      let courseList = [];
      // console.log(Object.values(data));
      Object.values(data).forEach((item) => {
        // console.log(item);
        item.forEach((item1) => {
          // console.log(item1)
          courseList.push(item1);
        })
      })
      return courseList;
    }
    else{
      return data[category];
    }

  }

  



  return (
    <div className="flex flex-wrap max-w-[1200px] justify-center  mx-auto gap-4">
      {
        getCourseList().map((course) => {
          return (
            <Card key={course.id} course={course} likedList={likedList} setLikedList={setLikedList}>

            </Card>
          )
        })
      }

    </div>
  )
};

export default Cards;
