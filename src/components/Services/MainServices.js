import React from "react"
import CategoryService from "./CategoryServices"


const MainServices = ({ propCard, propCategories }) => { 
  const categories = propCategories.sort((a,b)=>a.id-b.id)
  
  return (
    <section className="main-container" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row">
          {categories.map((item, index) => (
            <CategoryService
              key={index}
              title={item.category_title}
              lead={item.category_lead !== "empty" ? item.category_lead : ""}
              propCard={propCard.filter(card=> card.tag_card===item.tag_name)}            
              
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainServices
