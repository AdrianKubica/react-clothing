import React from "react"
import "./menu-item.styles.scss"

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
}

export const MenuItem = ({ title, imageUrl, size }: ISection) => (
  <div className={`${size} menu-item`}>
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
