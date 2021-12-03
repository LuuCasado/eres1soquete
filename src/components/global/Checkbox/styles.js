import { createUseStyles } from 'react-jss'



export default createUseStyles({
  container: {
    fontSize: "1.3rem",
    display: "flex",
    position: "relative",
    paddingLeft: "30px",
    marginBottom: "10px",
    paddingTop: "0px",
    cursor: "pointer",
    alignItems: "center",

    "&:hover input ~ div, & input:focus ~ div, & input:checked ~ div": {
      background: "#ffffff"

    },

    "& input": {
      position: "absolute",
      zIndex: "-1",
      opacity: "0",

      "&:disabled ~ div": {
        background: "#e6e6e6",
        opacity: "0.6",
        pointerEvents: "none",
      },
      "&:checked ~ div::after": {
        display: "block",
      },
      "&:disabled ~ div::after": {
        borderColor: "#7b7b7b",
      },

      "&:checked + div::before": {
        animationName: "s-ripple-dup"
      },
      "& + div::before": {
        animation: "s-ripple 250ms ease-out"
      }
    },

    "& div": {
      position: "absolute",
      left: "0",
      height: "20px",
      width: "20px",
      background: "#ffffff",
      border: "1px solid #b99cf0",
      borderRadius: "4px",

      "&::after": {
        boxSizing: "unset",
        content: "''",
        position: "absolute",
        display: "none",
        left: "8px",
        top: "4px",
        width: "3px",
        height: "8px",
        border: "solid #b530e1",
        borderWidth: "0 2px 2px 0",
        transform: "rotate(45deg)",
      },
      "&::before": {
        content: "''",
        display: "block",
        position: "absolute",
        left: "0",
        top: "0",
        width: "4.5rem",
        height: "4.5rem",
        marginLeft: "-1.3rem",
        marginTop: "-1.3rem",
        background: "#b530e1",
        borderRadius: "3rem",
        opacity: "0.6",
        zIndex: "99999",
        transform: "scale(0)",
      }
    }
  },

})