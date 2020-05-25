import React from 'react'
import {Link} from 'gatsby'
export default function LearnMoreButton({route, isDark}) {
  var theme = ''
  if(isDark){
    theme='-dark'
  }
  return (
    <Link className="btn-wrap" to={route}>
      <div className={`btn btn${theme} btn-blue`}>
        <p>Learn More</p>
        <div className="line"></div>
        <i className="fas fa-arrow-right"></i>
      </div>
    </Link>
  )
}
