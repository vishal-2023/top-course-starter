import React from 'react'
import {FcLike} from "react-icons/fc"

const Card = (props) => {
  let course=props.course;
  return (
    <div>
      <div>
        <img src={course.image.url} alt=''/>
      </div>
      <div>
        <button>
          <FcLike/>
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.desription}</p>
      </div>
    </div>
  )
}

export default Card;