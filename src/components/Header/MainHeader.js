import React, {useState, useEffect} from "react"
import HeaderTop from "./TopHeader"
import HeaderFixed from "./FixedHeader"

const MainHeader = ({ menu,color,language }) => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])
  return (
    <header>
      <HeaderTop />
      <HeaderFixed menu= {menu} color={color}  language={language} fixed={false} />
      {scrollY>182 && <HeaderFixed menu= {menu} color={color}  language={language} fixed={true} />}
    </header>
  )
}

export default MainHeader
