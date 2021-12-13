import { createUseStyles } from 'react-jss'

export default createUseStyles({
  btn: {
    display: "block "
  },
  primary: {
    backgroundColor: "#b99cf0",
    borderColor: "#b99cf0",

    "&:hover": {
      backgroundColor: "#f29cdd",
      borderColor: "#f29cdd"
    }
  },

  link: {
    backgroundColor: "transparent",
    border: "transparent",
    color: "#947CC0",
    "&:hover": {
      color: "#f29cdd",

    }
  },

  secondary: {
    backgroundColor: "#555",
    color: "white",
    fontSize: "16px",
    padding: "12px 24px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    height: "auto",
    "&:hover": {
      backgroundColor: "#f29cdd",
      borderColor: "#f29cdd",
      color: "white"
    }
  }
})