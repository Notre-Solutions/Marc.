import React from 'react'
import {Link} from 'gatsby'
export default function LearnMoreButton({route}) {
  return (
    <Link className="btn-wrap" to={route}>
      <div className="btn btn-blue">
        <p>Learn More</p>
        <div className="line"></div>
        <i className="fas fa-arrow-right"></i>
      </div>
    </Link>
  )
}
