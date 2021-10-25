import { createUseStyles } from 'react-jss'

export default createUseStyles({
  title: {
    textAlign: "center",
    fontSize: "1.5rem",

  },
  tags: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5rem",
    "& div.section-tag": {
      borderRadius: "10px",
      backgroundColor: "#b99cf0",
      padding: "10px",
      margin: "10px",
      color: "white",
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
  }
})