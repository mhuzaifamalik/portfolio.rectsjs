import React from 'react'

const Themeitem = ({color, img, changeColor}) => {
  return (
    <>
     <img src={img} className="theme__img" alt="img" onClick={() => {changeColor(color)}} />
    </>
  )
}

export default Themeitem

