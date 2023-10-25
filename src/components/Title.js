import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <span>{subTitle}</span>
    </div>
  )
}

export default Title;
