import React from "react"
import "../Home2nd/Home2nd.css"
import ParagraphLeft from "../Home2nd/ParagraphLeft/ParagraphLeft"
import { Collapse } from "antd"
import QueueAnim from "rc-queue-anim"
import TextCenter from "../TextCenter/TextCenter"
const { Panel } = Collapse
export default ({ color, data,language }) => {
  const dataUse = data.frontmatter[`home_2nd_${language}`] || {}
  const dataArr = Object.values(dataUse).map(item => item) || []
  const dataPanel = dataArr.filter((item, index) => index >= 3)
  const dataParagraph = dataArr[0]
  const fontAwesome = [
    "fa fa-gavel customwidth",
    "fa fa-star customwidth",
    "fa fa-usd customwidth",
    "fa fa-weixin customwidth",
  ]
  const extraNode = index => <i className={fontAwesome[index]}></i>
  const dataRender = dataPanel.map((item, index) => (
    <Panel
      header={item[`home_panel_title_${language}_${index + 1}`]}
      key={index + 1}
      extra={extraNode(index)}
      showArrow={false}
    >
      <p>{item[`home_panel_desc_${language}_${index + 1}`]}</p>
    </Panel>
  ))
  return (
    <section className="main-container">
      <div className="container">
        <TextCenter head={dataArr[2]} description={dataArr[1]} />
        <br/>
        <div className="row home2nd">
          <ParagraphLeft color={color} data={dataParagraph} language={language}/>
          <div className="col-lg-6 col-md-12">
            <div>
              <QueueAnim className="demo-content">
                <Collapse
                  className="panel-group"
                  accordion
                  defaultActiveKey={1}
                >
                  {dataRender}
                </Collapse>
              </QueueAnim>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}