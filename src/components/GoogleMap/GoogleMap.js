import React from "react"

const GoogleMap = () => {
  return (
    <div
      className="banner"
      style={{ height: "344px", marginTop: "0px", marginBottom: "30px" }}
    >
      <iframe 
      title="htactive address map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.280395156902!2d108.20346194939347!3d16.0509329888377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d881a87be1%3A0x3a2d8f3500144b7c!2sHT%20Active!5e0!3m2!1svi!2s!4v1574306688014!5m2!1svi!2s"
      width="100%" height={400} frameBorder={0} style={{ border: 0 }}
      allowFullScreen />
      <br></br>
    </div>
  )
}

export default GoogleMap
