import React from "react"
import "./homepage.styles.scss"
import { Directory } from "../../components/directory/directory.component"

export const HomePage = (props: any) => (
  <div className="homepage">
    <button onClick={() => props.history.push("/shop")}>TEST</button>
    <Directory />
  </div>
)
