import React from "react"
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#ffffff",
  outline: "none",
  padding: "12px 60px",
  backgroundColor: "rgb(0, 0, 0)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const Subscribe = class extends React.Component {
//replaced stripe API with simple stripe checkout link. 
  render() {
    return (
      <a href="https://buy.stripe.com/eVa9Ej3Hy4Hw7T26oo">
        <button
          style={buttonStyles}
        >
          CLICK HERE TO SUBSCRIBE
        </button>
      </a>
    )
  }
}
export default Subscribe