import React, { useState, useEffect } from "react"

const SliderProgressBar = () => {
  const [currentCount, setCount] = useState(0)

  useEffect(() => {
    const timer = () => setCount(currentCount + 0.155)
    if (currentCount >= 100) {
      return
    }
    const id = setInterval(timer, 10)
    return () => clearInterval(id)
  }, [currentCount])

  return (
    <div
      className="tp-bannertimer tp-bottom "
      style={{ width: `${currentCount}%` }}
    ></div>
  )
}
export default SliderProgressBar
