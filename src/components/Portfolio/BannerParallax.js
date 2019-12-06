import React from "react"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"


const BannerParallax = ({data}) => {    
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="section dark-translucent-bg parallax-bg"
        layers={[
          {
            image: data.banner_img,
            amount: 0.7,
          },
        ]}
        style={{height:"400px"}}
       
      >
        <div className="banner-page">
          <div className="container banner-lead">
            <div className="space-top"></div>
            <h1 className="first-title">{data.banner_title}</h1>
            <div className="separator-2"></div>
            <p className="lead">
            {data.banner_leads[0].banner_lead}
            <br/>
            <br/>
            {data.banner_leads[1].banner_lead}
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}
export default BannerParallax