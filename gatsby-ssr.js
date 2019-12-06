import wrapWithProvider from "./wrap-with-provider"
import React from "react"
export const wrapRootElement = wrapWithProvider
export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      src="https://www.facebook.com/rsrc.php/v3/yt/r/grxn0XjqtGR.js?_nc_x=Ij3Wp8lg5Kz"
      type="text/javascript"
      defer="true"
    ></script>,
    <script
      src="https://www.facebook.com/rsrc.php/v3/yY/r/qr3Q2O6Du_Q.js?_nc_x=Ij3Wp8lg5Kz"
      type="text/javascript"
      defer="true"
    ></script>,
    <script
      src="https://www.facebook.com/rsrc.php/v3/yj/r/iNvDn9MydGf.js?_nc_x=Ij3Wp8lg5Kz"
      type="text/javascript"
      defer="true"
    ></script>,
    <script
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhtactive%2F&amp;tabs&amp;width=340&amp;height=214&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=1780445882280832"
      type="text/javascript"
      defer="true"
    ></script>,
  ])
}
