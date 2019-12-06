import React from "react"
import Card from "./CardServices"


const CategoryService = ({ title, lead, propCard }) => {
  return (
    <div className="main col-md-12">
      <h1 className="page-title">{title}</h1>
      <div className="separator-2"></div>
      <p className="lead">{lead}</p>
      <div
        className="image-boxes isotope-container row"
        style={{
          position: "relative",
        }}
      >
        {propCard.map((item, index) => (
          <Card          
            key={index}
            image={item.card_img}
            title={item.card_title}
            content={item.card_lead}
          />
        ))}
      </div>
      <div className="clearfix"></div>
    </div>
  )
}
export default CategoryService