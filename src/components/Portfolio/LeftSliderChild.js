  
import React from "react"

const LeftSliderChild = ({ prevItem, item, src, title, handleOpenSlider, color }) => {
  return (
    <div
      className={`slide-item ${
        prevItem < item ? "fade-in-left-1" : "fade-in-right-1"
      }`}
      style={{ width: "360px" }}
    >
      <div className={`overlay-container ${color}`}>
        <img src={src} alt={title} />
        <span className="popup-img overlay slide-overlay" onClick={()=>handleOpenSlider(true)} title={title}>
          <i className="fa fa-search-plus" />
        </span>
      </div>
    </div>
  )
}
export default LeftSliderChild