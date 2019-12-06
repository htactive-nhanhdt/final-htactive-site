import React from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

const Banner = ({ propBanner}) => {
 
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="section dark-translucent-bg parallax-bg"
        layers={[
          {
            image: propBanner.banner_img,
            amount: 0.7,
          },
        ]}
        style={{
          height: "400px",
        }}
      >
        <div className="banner-page">
          <div className="container banner-lead">
            <div className="space-top"></div>
            <h1 className="first-title">{propBanner.banner_title}</h1>
            <div className="separator-2"></div>
            <p className="lead">
              {propBanner.banner_lead.split(".")[0]}.
              <br />
              {propBanner.banner_lead.split(".")[1]}.
              <br />
              {propBanner.banner_lead.split(".")[2]}.
              <br />
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}
export default Banner
