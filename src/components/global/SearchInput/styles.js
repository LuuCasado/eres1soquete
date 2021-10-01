import { createUseStyles } from 'react-jss'

export default createUseStyles({
  search: {
    position: "relative",
    display: "flex",

    "& input": {
      outline: "none",
      appearance: "textfield",
      boxSizing: "content-box",
      fontSize: "100%",
      alignSelf: "center",
      border: "solid 1px transparent",
      borderRadius: "10em",
      padding: "9px 10px 9px 32px",
      paddingLeft: "10px",
      height: "max-content",
      width: "15px",
      color: "transparent",
      cursor: "pointer",
      transition: "all 0.5s",
      background: "transparent"
    },

    "& input:focus": {
      width: "130px",
      borderColor: "#faef96",
      paddingLeft: "32px",
      color: "#000",
      backgroundColor: "#fff",
      backgroundPosition: "90% 50%",
      cursor: "auto",
      boxShadow: "0 0 5px rgba(109, 207, 246, 0.5)"
    },

    "& input:not(:focus)::placeholder": {
      color: "transparent !important"
    },

    "& input:not(:focus):hover": {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },

    "& i": {
      position: "absolute",
      color: "white",
      fontSize: "1.1rem",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }
  },
})