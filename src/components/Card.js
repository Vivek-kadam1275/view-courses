import React from "react"
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";

import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course;

  let likedList = props.likedList;
  let setLikedList = props.setLikedList;
  const likeHandler = () => {
    if (likedList.includes(course.id)) {
      setLikedList((prev) => {
        return prev.filter((cid) => { return (cid !== course.id) })
      });
      toast.warning('like removed');
    }
    else {
      toast.success("liked successfully");
      setLikedList((prev) => { return [...prev, course.id]});
    }
  }


  return (
    <div className="bg-[#2a2b44] border border-transparent rounded-lg overflow-hidden ">
      <div className="flex flex-col w-[300px] items-center relative">
        <img src={course.image.url} alt={course.image.alt} className="" />
        <i className="absolute w-10 h-10 rounded-full flex justify-center items-center bg-white cursor-pointer right-2 bottom-[-12px] " onClick={likeHandler}>

        {likedList.includes(course.id) ? <FcLike className="text-2xl"/>:<FcLikePlaceholder className="text-2xl "/>}
          
          

        </i>
      </div>
      <div className="w-[300px] text-white p-4  ">
        <p className="font-semibold text-xl leading-6 mb-2" >{course.title} </p>
        <p>{course.description.length > 100 ? course.description.substring(0, 100) + "..." : course.description} </p>
      </div>
    </div>
  )
};

export default Card;
