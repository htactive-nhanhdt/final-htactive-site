import React, { useState, useEffect } from "react"
import {
  FaCheck
} from "react-icons/fa"

const BannerSliderLeft = props => {
  const { title, lead } = props
  const leadArr = lead.split("+")
  const leads = leadArr.slice(0, 4)
  const more = leadArr.slice(4, 5)
  const [fadeOut, setFadeOut] = useState(false)
  const timer = () => setFadeOut(true)
  useEffect(() => {
    const id = setTimeout(timer, 8500)
    return () => clearTimeout(id)
  }, [fadeOut])
  return (
    <div className="banner-left-heading ">
      <h2
        className={`banner-title default_bg  ${
          fadeOut ? "fade-out-right-1" : ""
        }`}
      >
        {title}
      </h2>
      <ul>
        {leads.map((item, index) => (
          <li key={index}>
            <span
              className={`icon-check dark_gray_bg tp-resizeme  ${
                fadeOut
                  ? `fade-out-left-${index + 1}`
                  : `fade-in-left-${index + 1}`
              }`}
            >
              <FaCheck/>
            </span>
            <span
              className={`right-text white_bg tp-resizeme  ${
                fadeOut
                  ? `fade-out-right-${index + 1}`
                  : `fade-in-right-${index + 1}`
              }`}
            >
              {item}
            </span>
          </li>
        ))}
        <li>
          <span
            className={`dark_gray_bg icon-check tp-resizeme  ${
              fadeOut ? "fade-out-right-4" : "fade-in-left-5"
            }`}
          >
            {more}
          </span>
        </li>
      </ul>
    </div>
  )
}

export default BannerSliderLeft
