import React from "react"
import "./menu-item.styles.scss"
import { withRouter } from "react-router-dom"
import { RouteComponentProps } from "react-router"

export interface IMenuItem {
  id: number
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}

export interface ISection {
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }: ISection & RouteComponentProps) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
