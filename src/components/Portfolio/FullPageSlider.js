import React from "react"
import BannerAnim from "rc-banner-anim"
import { RemoveScrollBar } from "react-remove-scroll-bar"
import { Button } from "antd"

const { Element } = BannerAnim
const BgElement = Element.BgElement

const FullPageSlider = ({ listImg, handleOpenSlider}) => {
  return (
    <>
      <RemoveScrollBar />
      <div className="big-slider">
        <div className="shield" />
        <Button
          type="primary"
          shape="circle"
          icon="close"
          className="big-slider-close"
          onClick={()=>handleOpenSlider(false)}
        ></Button>
        <BannerAnim autoPlayEffect={false}>
          {listImg.map(item => (
            <Element key={item.id} prefixCls="banner-user-elem">
              <BgElement
                key="bg"
                className="bg"
                style={{
                  top: "20px",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${item.slider})`,
                  backgroundSize: "200px auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              />
            </Element>
          ))}
        </BannerAnim>
      </div>
    </>
  )
}
export default FullPageSlider