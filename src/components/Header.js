import React from "react"
import { red, green } from "color-name"

function Header() {
  const styles = {
    color: "red",
    backgroundColor: "blue",
    fontSize: "240px"
  }

  return (
    <header style={styles} className="navbar">
      This is PK
    </header>
  )
}

export default Header
