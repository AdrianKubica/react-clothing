import React from "react"
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
import { useSelector } from "react-redux"
import { selectDirectorySections } from "../../store/directory/directory.selectors"

export const Directory = () => {
  const sections = useSelector(selectDirectorySections)
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}
